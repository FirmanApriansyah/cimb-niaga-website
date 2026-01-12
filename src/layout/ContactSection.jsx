import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ContactSection({ id }) {
  const [success, setSucces] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const isFormValid =
    form.firstName && form.lastName && form.email && form.message;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));

    if (error) setError(false);
    if (success) setSucces(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid) {
      setError(true);
      setSucces(false);

      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    setSucces(true);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });

    setError(false);

    setTimeout(() => {
      setSucces(false);
    }, 2000);
  }

  return (
    <section id={id} className="w-full bg-[#F5F1E6] pt-16 pb-32">
      <div className="container">
        {/* Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="pb-8 text-center md:pb-12 lg:pb-16">
            <h1 className="text-4xl font-extrabold text-[#7B011E] md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <h3 className="pt-2 text-base font-bold text-[#7B011E] md:pt-3 md:text-xl lg:text-2xl">
              Here to help you move forward
            </h3>
            <div className="mx-auto mt-5 h-0.75 w-30 bg-[linear-gradient(to_right,transparent,rgba(139,69,19,0.3),rgba(139,69,19,0.8),rgba(139,69,19,0.3),transparent)] blur-[0.5px] lg:h-1 lg:w-50" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 justify-center gap-14 lg:grid-cols-2">
          <div className="pb-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
            <div className="px-4 pt-8 lg:pt-0">
              <div className="w-fit rounded-full bg-[#7B011E]/10 px-3 py-1">
                <h1 className="text-base font-semibold text-[#7B011E] md:text-xl">
                  CONTACT SUPPORT
                </h1>
              </div>
            </div>

            
              <div className="px-4 pt-6">
                <h1 className="text-3xl font-bold text-black md:text-5xl">
                  We are here to help
                </h1>
                <p className="pt-6 text-slate-700 md:text-xl">
                  Reach out to us for any inquiries regarding your banking
                  needs. Our dedicated team is available 24/7 to assist you.
                </p>
              </div>

              <div className="px-4 pt-10">
                {/* Head Office */}
                <div className="flex gap-6">
                  <div className="flex h-fit w-fit items-center justify-center rounded-xl bg-white p-4">
                    <MapPin size={35} className="text-[#7B011E]" />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold lg:text-2xl">
                      Head Office
                    </h1>
                    <p className="pt-2 text-slate-700">
                      Graha CIMB Niaga Jl. Jend. Sudirman Kav. 58,
                    </p>
                    <p className="pt-1 text-slate-700">
                      Jakarta 12190, Indonesia
                    </p>
                  </div>
                </div>

                {/* Call Center */}
                <div className="flex gap-6 pt-12">
                  <div className="flex h-fit w-fit items-center justify-center rounded-xl bg-white p-4">
                    <Phone size={35} className="text-[#7B011E]" />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold lg:text-2xl">
                      Call Center
                    </h1>
                    <p className="pt-2 text-slate-700">
                      <span className="font-semibold text-[#7B011E]">
                        14041
                      </span>{" "}
                      (24/7 Customer Support)
                    </p>
                    <p className="pt-1 text-slate-700">
                      +62 21 2997 8888 (Overseas)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6 pt-12">
                  <div className="flex h-fit w-fit items-center justify-center rounded-xl bg-white p-4">
                    <Mail size={35} className="text-[#7B011E]" />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold lg:text-2xl">
                      Email us
                    </h1>
                    <p className="pt-1 text-slate-700">
                      contactus@cimbniaga.co.id
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
          <div className="justify-center px-4">
            <div className="w-full rounded-xl bg-[#7B011E] p-6">
              <h1 className="pb-6 text-2xl font-bold text-white">
                Send us a message
              </h1>
              <form
                onSubmit={handleSubmit}
                action=""
                className="grid grid-cols-1 gap-6"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Fist Name */}
                  <label htmlFor="">
                    <span className="text-xl text-white">First Name</span>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your name..."
                      className="mt-2 block w-full rounded-md bg-white/15 px-3 py-3 text-white outline-none"
                    />
                  </label>

                  {/* Lst Name */}
                  <label htmlFor="">
                    <span className="text-xl text-white">Last Name</span>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your name..."
                      className="mt-2 block w-full rounded-md bg-white/15 px-3 py-3 text-white outline-none"
                    />
                  </label>
                </div>

                {/* Email */}
                <label htmlFor="" className="relative">
                  <span className="text-xl text-white">Email Address</span>
                  <Mail className="absolute bottom-3 left-3 text-white/40" />
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="john.doe@example.com"
                    className="mt-2 block w-full rounded-md bg-white/15 px-12 py-3 text-white outline-none"
                  />
                </label>

                {/* Subject */}
                <label htmlFor="">
                  <span className="text-xl text-white">Subject</span>
                  <select
                    id=""
                    className="mt-2 block w-full rounded-md bg-white/15 px-3 py-3 font-semibold text-white outline-none"
                  >
                    <option value="" disabled selected className="bg-white">
                      Select an option
                    </option>
                    <option className="font-semibold text-[#7B011E]">
                      Savings & Account Information
                    </option>
                    <option className="font-semibold text-[#7B011E]">
                      Time Deposit Information
                    </option>
                    <option className="font-semibold text-[#7B011E]">
                      Credit & Debit Cards
                    </option>
                    <option className="font-semibold text-[#7B011E]">
                      Mobile & Internet Banking
                    </option>
                    <option className="font-semibold text-[#7B011E]">
                      Customer Complaints
                    </option>
                    <option className="font-semibold text-[#7B011E]">
                      Account Security
                    </option>
                    <option className="font-semibold text-[#7B011E]">
                      Others
                    </option>
                  </select>
                </label>

                {/* Message */}
                <label htmlFor="">
                  <span className="text-xl text-white">Message</span>
                  <textarea
                    value={form.message}
                    onChange={handleChange}
                    name="message"
                    id=""
                    className="mt-2 block w-full rounded-md bg-white/15 px-3 py-3 text-white outline-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </label>

                <button
                  type="submit"
                  className="mt-6 flex items-center justify-center gap-2 rounded-md bg-white py-4"
                >
                  <span className="text-[1.15rem] font-bold text-[#7B011E]">
                    Send Message
                  </span>
                  <LuSendHorizontal size={20} className="text-[#7B011E]" />
                </button>
                {error && (
                  <h1 className="text-xl font-bold text-red-500">
                    Please complete all required fields before submitting the
                    form.
                  </h1>
                )}

                {success && (
                  <h1 className="text-xl font-bold text-green-400">
                    Message Sent Successfully
                  </h1>
                )}
              </form>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
