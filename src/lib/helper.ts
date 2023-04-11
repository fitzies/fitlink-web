import { toast } from "react-toastify";

function addRow(data: string) {
  fetch("https://api.apispreadsheets.com/data/P8adFLPaEl8NJ2M4/", {
    method: "POST",
    body: JSON.stringify({ data: { Email: data } }),
  }).then((res) => {
    if (res.status === 201) {
      // SUCCESS
    } else {
      // ERROR
    }
  });
}

function addToast(text: string, type?: "success" | "error") {
  if (type === "success") {
    toast.success(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (type === "error") {
    toast.error(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    toast(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
}

export { addRow, addToast };
