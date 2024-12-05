"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MatrixRain } from "./MatrixRain";

const ContactSection = () => {
  const [currentField, setCurrentField] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isInView, setIsInView] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const fields = [
    {
      id: "name",
      label: "Name",
      placeholder: "Masukan Nama Anda",
      type: "text",
    },
    {
      id: "email",
      label: "Email",
      placeholder: "Masukan Email Anda",
      type: "email",
    },
    {
      id: "message",
      label: "Message",
      placeholder: "Masukan Pesan yang ingin anda sampaikan",
      type: "textarea",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          setIsTyping(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let blinkCursorInterval: NodeJS.Timeout;
  
    if (!isMobile && isTyping && isInView && !hasUserInteracted) {
      const text = fields[currentField].placeholder;
      let index = 0;
  
      const typeText = () => {
        if (index <= text.length) {
          setTypedText(text.slice(0, index) + (index < text.length ? "|" : "|"));
          index++;
          setTimeout(typeText, 100);
        } else {
          // Start blinking cursor after typing
          let isVisible = true;
          blinkCursorInterval = setInterval(() => {
            if (!hasUserInteracted) {
              setTypedText(text + (isVisible ? "|" : ""));
              isVisible = !isVisible;
            }
          }, 500);
        }
      };
  
      typeText();
    }
  
    return () => {
      if (blinkCursorInterval) {
        clearInterval(blinkCursorInterval);
      }
    };
  }, [currentField, isTyping, isInView, hasUserInteracted]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      !isMobile &&
      e.key === "Enter" &&
      formData[fields[currentField].id as keyof typeof formData]
    ) {
      e.preventDefault();
      if (currentField < fields.length - 1) {
        setCurrentField((prev) => prev + 1);
        setHasUserInteracted(false); // Reset interaction state for next field
        setIsTyping(true); // Restart typing animation
        setTypedText(""); // Clear previous text
      } else {
        setIsTypingComplete(true);
      }
    }
  };

  const handleInputFocus = () => {
    if (!hasUserInteracted) {
      setHasUserInteracted(true);
      setIsTyping(false); // Stop typing animation when user focuses
      setTypedText(''); // Clear typed text
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setHasUserInteracted(true);

    if (isMobile) {
      if (value && currentField < fields.length - 1) {
        setTimeout(() => {
          setCurrentField((prev) => prev + 1);
          setIsTyping(true);
          setTypedText("");
        }, 1000);
      } else if (currentField === fields.length - 1 && value) {
        setIsTypingComplete(true);
      }
    }
  };

  return (
    <section
    id="contact"
      ref={sectionRef}
      className="min-h-screen bg-[#0D0C22] py-20 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-gray-400">Let`s start a conversation</p>
        </motion.div>


        <div className="relative bg-[#1E1E3F] rounded-xl p-8 border border-purple-500/20">
          <MatrixRain />

          <form
            className="relative z-10 space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <AnimatePresence mode="wait">
              {fields.map(
                (field, index) =>
                  currentField >= index && (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <label className="block text-gray-300 mb-2">
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
  <div className="relative">
    <textarea
      ref={inputRef as React.RefObject<HTMLTextAreaElement>}
      className="w-full bg-[#2D2B55] text-gray-100 rounded-lg p-4 focus:ring-2 focus:ring-purple-500 focus:outline-none"
      rows={4}
      placeholder={isMobile ? field.placeholder : ""}
      value={formData[field.id as keyof typeof formData]}
      onChange={(e) => handleInputChange(field.id, e.target.value)}
      onKeyDown={handleKeyDown}
      onFocus={handleInputFocus}
    />
    {!isMobile && isTyping && currentField === index && (
      <div className="absolute top-0 left-0 w-full h-full flex items-start px-4 pt-4 pointer-events-none text-gray-400">
        {typedText}
      </div>
    )}
  </div>
) : (
                        <div className="relative">
                          <input
                            ref={inputRef as React.RefObject<HTMLInputElement>}
                            type={field.type}
                            className="w-full bg-[#2D2B55] text-gray-100 rounded-lg p-4 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            placeholder={isMobile ? field.placeholder : ""}
                            value={formData[field.id as keyof typeof formData]}
                            onChange={(e) =>
                              handleInputChange(field.id, e.target.value)
                            }
                            onKeyDown={handleKeyDown}
                            onFocus={handleInputFocus}
                          />
                          {!isMobile && isTyping && currentField === index && (
                            <div className="absolute top-0 left-0 w-full h-full flex items-center px-4 pointer-events-none text-gray-400">
                              {typedText}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            {isTypingComplete && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg text-white font-medium"
              >
                Send Message
              </motion.button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
