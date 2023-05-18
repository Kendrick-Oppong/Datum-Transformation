

export const CopyResults = () => {

  const copyText = document.getElementById("copyText");
    const textToCopy = copyText.innerHTML;
   

  if ("clipboard" in navigator && "writeText" in navigator.clipboard) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Unable to copy text:", error);
      });
  } else {
    // Fallback for browsers that do not support the Clipboard API
    copyText.select();
    document.execCommand("copy");
    alert("Text copied to clipboard!");
    }
    
   
}


