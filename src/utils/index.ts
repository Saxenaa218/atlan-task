import { message } from "antd";
import { DataType } from "../redux";
import { FileNameTypes } from "./types";
export * from "./constants";

export const getColorText = (text: string) => {
  const value = parseFloat(text);
  if (value > 0) {
    return "green";
  } else if (value < 0) {
    return "red";
  } else {
    return "";
  }
};

export const formatCurrency = (value: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseFloat(value));
};

export const formatNumber = (value: string) => {
  return new Intl.NumberFormat("en-US").format(parseFloat(value));
};

export const getResultData = (inputValue: string) => {
  const fileNames: FileNameTypes = {
    small: "small",
    moderate: "moderate",
    large: "large",
  };
  const fileToPick = getFileToPick(inputValue, fileNames);
  const file = require(`./datafiles/${fileToPick}`).default;
  return file;
};

const getFileToPick = (inputValue: string, fileNames: FileNameTypes) => {
  switch (inputValue) {
    case "select * from small":
      return fileNames.small;
    case "select * from moderate":
      return fileNames.moderate;
    case "select * from large":
      return fileNames.large;
    default:
      return fileNames.small;
  }
};

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    message.success("Copied to clipboard");
  } catch (e) {
    console.error(e);
    message.error("Failed to copy, please try again!");
  }
};

export const downloadData = (fileName: string, resultData: DataType[]) => {
  const blob = new Blob([JSON.stringify(resultData)], { type: "text/json" });
  const link = document.createElement("a");

  link.download = fileName;
  link.href = window.URL.createObjectURL(blob);
  link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");

  const evt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  link.dispatchEvent(evt);
  link.remove();
};
