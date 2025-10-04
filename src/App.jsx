import * as yup from "yup";
import { useFormik } from "formik";
import QRCode from "react-qr-code";
import { useRef, useState } from "react";
import GitHubIcon from "./assets/icon/github";
import * as htmlToImage from "html-to-image";

export default function App() {
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
        link.download = "qr-code-png";
        link.click();
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <article>
        <h1 className="text-[1.875rem] font-bold mb-20">QR Code Generate</h1>
      </article>
      <div>
        <article>
          <h3 className="text-2xl font-bold ">
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
              placeholder="Please URL enter"
              className={`w-72 outline-none px-2 py-1 rounded-sm ${formik.errors.url && formik.touched.url ? "border border-red-500" : "border border-zinc-600"}`}
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
                className={`transition-colors duration-300 ease-in-out text-white px-2.5 py-1.5 rounded-sm ${formik.values.url ? "cursor-pointer hover:bg-blue-800 bg-blue-500" : "bg-blue-500/30 cursor-not-allowed"}`}
                onClick={downloadQRCode}
              >
                Download
              </button>
            )}
            <button
              disabled={formik.errors.url && formik.touched.url}
              type="sumbit"
              className={`transition-colors duration-300 ease-in-out text-white px-2.5 py-1.5 rounded-sm ${formik.values.url ? "cursor-pointer hover:bg-blue-800 bg-blue-500" : "bg-blue-500/30 cursor-not-allowed"}`}
              onClick={isVisible}
            >
              Generate QR Code
            </button>
          </div>
        </form>
      </div>
      <div className="mt-20">
        <a
          className="flex flex-col items-center justify-center gap-y-1"
          href="https://github.com/NadirYusifov/"
        >
          <GitHubIcon size={20} />
          Github
        </a>
      </div>
    </section>
  );
}
