import html2canvas from "html2canvas";

export const logout = () => {
  const url = "https://accounts.spotify.com/logout";
  const spotifyLogoutWindow = window.open(
    url,
    "Spotify Logout",
    "width=800,height=600"
  );

  setTimeout(() => {
    spotifyLogoutWindow.close();
    location.href = "/";
  }, 800);
};

const hiddenClone = (element) => {
  // Create clone of element
  const clone = element.cloneNode(true);

  // Position element relatively within the
  // body but still out of the viewport
  const style = clone.style;
  style.position = "relative";
  style.top = window.innerHeight + "px";
  style.left = 0;
  // Append clone to body and return the clone
  document.body.appendChild(clone);
  return clone;
};

export const downloadImage = (dom) => {
  window.scrollTo(0, 0);
  const clone = hiddenClone(dom);
  // Use clone with htm2canvas and delete clone
  html2canvas(clone, { scrollY: -window.scrollY }).then((canvas) => {
    const dataURL = canvas.toDataURL("image/png", 1.0);
    document.body.removeChild(clone);
    const link = document.createElement("a");
    console.log(dataURL);
    link.href = dataURL;
    link.download = `favtify.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};

export const menuTimeRange = [
  {
    id: 1,
    value: "short_term",
    description: "last month",
  },
  {
    id: 2,
    value: "medium_term",
    description: "last 6 months",
  },
  {
    id: 3,
    value: "long_term",
    description: "all time",
  },
];

export const formatDate = (date) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = weekdays[date.getDay()];
  const dateNum = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  return `${day}/${dateNum}/${month}`;
};
