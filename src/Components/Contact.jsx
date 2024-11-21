import { contactsInfo } from "../Constants";

const Contact = () => {
  return (
    <div className="p-5">
      <p className="text-slate-500 text-center mb-2">Get In Touch !</p>
      <h1 className="text-center text-3xl tracking-wide font-semibold mb-3">
        Contact Me
      </h1>
      <div className="flex justify-center align-center my-8">
        <div className="lg:flex justify-between align-center lg:w-1/2 border border-black p-4 rounded-2xl bg-gray-100 space-y-2 lg:space-y-0">
          {contactsInfo.map((item, index) => (
            <div key={index} className="flex space-x-2 px-3">
              <a href="#" className="rounded">
                {item.icon}
              </a>
              <span className="text-lg tracking-tight">{item.info}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
