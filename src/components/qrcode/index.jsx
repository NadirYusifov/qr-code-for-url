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
    <section className="flex h-dvh flex-col items-center justify-center">
      <article>
        <h1 className="mb-20 text-center text-[1.875rem] font-bold">
          QR Code Generate
        </h1>
      </article>
      <div>
        <article>
          <h3 className="text-center text-2xl font-bold">
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
      <div className="mt-10 flex flex-col items-center justify-center">
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
              className={`w-full rounded-sm px-2 py-1 outline-none lg:w-72 ${formik.errors.url && formik.touched.url ? "border border-red-500" : "border border-zinc-600"}`}
            />
          </div>
          {formik.errors.url && formik.touched.url ? (
            <p className="px-12 text-[0.875rem] text-red-500">
              {formik.errors.url}
            </p>
          ) : null}
          <div className="flex items-center justify-center gap-x-3 pt-4">
            {qrcode && (
              <button
                disabled={formik.errors.url && formik.touched.url}
                type="sumbit"
                className={`rounded-sm px-2.5 py-1.5 text-white transition-colors duration-300 ease-in-out ${formik.values.url ? "cursor-pointer bg-sky-500 hover:bg-sky-600" : "cursor-not-allowed bg-sky-500/30"}`}
                onClick={downloadQRCode}
              >
                Download
              </button>
            )}
            <button
              disabled={!formik.values.url}
              type="sumbit"
              className={`rounded-sm px-2.5 py-1.5 text-white transition-colors duration-300 ease-in-out ${formik.values.url ? "cursor-pointer bg-sky-500 hover:bg-sky-600" : "cursor-not-allowed bg-sky-500/30"}`}
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
