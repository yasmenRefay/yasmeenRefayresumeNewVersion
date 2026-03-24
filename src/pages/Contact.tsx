import React, { useState } from "react";
import type { IconType } from "react-icons";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

type ContactItem = {
  icon: IconType;
  title: string;
  value: string;
  link?: string;
};



function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactData: ContactItem[] = [
    { icon: FaEnvelope, title: t("contact_email"), value: "yasmeenhifny@gmail.com" },
    { icon: FaLinkedin, title: t("contact_linkedin"), value: "linkedin.com/in/yasmeen", link: "https://www.linkedin.com/in/yasmeen-refay-90045b187/" },
    { icon: FaGithub, title: t("contact_github"), value: "github.com/yasmenRefay", link: "https://github.com/yasmenRefay" },
    { icon: FaWhatsapp, title: t("contact_whatsapp"), value: "+201200101503", link: "https://wa.me/201200101503" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const templateParams = {
    title: formData.name,  
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  };

  emailjs
    .send(
      "service_mtjcbgo",   
      "template_pxorhui",  
      templateParams,
      "142juFQzrdyiRUnt1"   
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 4000);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};


  return (
    <div className="py-16 px-4 sm:px-6 lg:px-32 bg-[#19252c] text-white">
      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-gray-300 max-w-2xl mx-auto">
          {t("HaveAProject")}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Contact Cards */}
        <div className="flex flex-col gap-6">
          {contactData.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#1e3644] p-5 rounded-2xl border border-[#2c3e47] 
                  hover:scale-105 hover:shadow-[0_0_20px_#ff715a] transition-transform duration-300 cursor-pointer"
              >
                <Icon className="text-2xl text-[#ff8c78] transform transition-transform duration-500 hover:-rotate-12 hover:scale-110" />
                <div>
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder= {t("YourName")}
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-[#1e3644] border border-[#2c3e47] rounded-xl p-3 text-white focus:outline-none focus:border-[#ff8c78]"
          />
          <input
            type="email"
            name="email"
            placeholder={t("YourEmail")}
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[#1e3644] border border-[#2c3e47] rounded-xl p-3 text-white focus:outline-none focus:border-[#ff8c78]"
          />
          <textarea
            name="message"
            rows={5}
            placeholder={t("YourMessage")}
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-[#1e3644] border border-[#2c3e47] rounded-xl p-3 text-white focus:outline-none focus:border-[#ff8c78]"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#ff715a] via-[#ff8c78] to-[#ffb58a] text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all"
          >
            {t("SendMessage")}
          </button>

          {success && (
            <p className="mt-3 text-green-400 font-medium animate-pulse">
              {t("MessageSentSuccessfully")}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
