import { useEffect } from "react";

const Bitrix24Loader = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.bitrix24.in/b30622487/crm/form/loader_1.js"; // ✅ Your script URL
    script.async = true;
    script.setAttribute("data-b24-form", "click/1/9jwv7f"); // ✅ Must match button
    script.setAttribute("data-skip-moving", "true");

    document.body.appendChild(script);

    return () => {
      // Optional cleanup
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Bitrix24Loader;
