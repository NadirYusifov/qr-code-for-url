import * as yup from "yup";
import { useFormik } from "formik";
import QRCode from "react-qr-code";
import { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";

export const QRCodeComponent = () => {
  const [qrcode, setQRcode] = useState(false);
  const [value, setValue] = useState("");
  const schema = yup.object().shape({
    url: yup
      .string()
      .url("URL must not be empty!")
      .required("URL is required!"),
  });

  const formik = useFormik({
    initialValues: {
      url: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      setValue(values.url);
    },
  });

  // ==============================
  /* This code use resources:
    Link: https://dev.to/onlyoneerin/creating-dynamic-qr-codes-using-reactjs-a-step-by-step-tutorial-341a;
    Own: The ERIN;
    GitHub: https://github.com/Jhimmyofficial;
    What was used: isVisible function and Download QRode for "downloadQRCode" use function;

    Thanks!
  */
  const isVisible = (url) => {
    if (url) {
      setQRcode(true);
    } else {
      return null;
    }
  };

  const qrcoderef = useRef(null);

  const downloadQRCode = () => {
    htmlToImage
      .toPng(qrcoderef.current)
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "qr-code-image";
        link.click();
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
  // ==============================

  return (
    <section className="flex flex-col justify-center items-center h-dvh">
      <article>
        <h1 className="text-[1.875rem] text-center font-bold mb-20">
          QR Code Generate
        </h1>
      </article>
      <div>
        <article>
          <h3 className="text-2xl font-bold text-center">
            {!qrcode && "No QR Code yet."}
          </h3>
        </article>
        {qrcode && (
          <div ref={qrcoderef}>
            <QRCode
              style={{ width: "100%" }}
              size={256}
              value={value}
              viewBox="0 0 256 256"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex items-center gap-2">
            <label htmlFor="url">URL:</label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.url}
              id="url"
              name="url"
              type="text"
              placeholder="URL enter: https://example.com"
              className={`w-full lg:w-72 outline-none px-2 py-1 rounded-sm ${formik.errors.url && formik.touched.url ? "border border-red-500" : "border border-zinc-600"}`}
            />
          </div>
          {formik.errors.url && formik.touched.url ? (
            <p className="text-[0.875rem] text-red-500 px-12">
              {formik.errors.url}
            </p>
          ) : null}
          <div className="pt-4 flex justify-center items-center gap-x-3">
            {qrcode && (
              <button
                disabled={formik.errors.url && formik.touched.url}
                type="sumbit"
                className={`transition-colors duration-300 ease-in-out text-white px-2.5 py-1.5 rounded-sm ${formik.values.url ? "cursor-pointer hover:bg-sky-600 bg-sky-500" : "bg-sky-500/30 cursor-not-allowed"}`}
                onClick={downloadQRCode}
              >
                Download
              </button>
            )}
            <button
              disabled={!formik.values.url}
              type="sumbit"
              className={`transition-colors duration-300 ease-in-out text-white px-2.5 py-1.5 rounded-sm ${formik.values.url ? "cursor-pointer hover:bg-sky-600 bg-sky-500" : "bg-sky-500/30 cursor-not-allowed"}`}
              onClick={isVisible}
            >
              Generate QR Code
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
