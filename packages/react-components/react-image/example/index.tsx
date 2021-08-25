import React from "react";
import ReactDOM from "react-dom";
import { Image, Placeholder, BackgroundImage } from "../src";
import { FakeDataUtils } from "@wbe/fake-data-utils";

const buildSrcset = (id: number, ratio = 4 / 3) =>
  [
    `https://picsum.photos/id/${id + 1}/360/${Math.round(360 * ratio)} 360w`,
    `https://picsum.photos/id/${id + 1}/1024/${Math.round(1024 * ratio)} 1024w`,
    `https://picsum.photos/id/${id + 1}/1440/${Math.round(1440 * ratio)} 1440w`,
  ].join(", ");

/**
 * Render
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

function App() {
  return (
    <div className="App" style={{ width: "75%", margin: "0 auto" }}>
      <Image
        src={`https://picsum.photos/id/3/600/300`}
        alt={"image"}
        width={"100%"}
      />

      <Placeholder backgroundColor={"pink"} ratio={1}>
        <Image
          data={FakeDataUtils.getResponsiveImageData(4 / 3)}
          alt={"image"}
        />
      </Placeholder>
      <br />
      <br />
      {new Array(5).fill(null).map((el, i) => (
        <Image
          key={i}
          alt={"simple src image"}
          srcPlaceholder={`https://picsum.photos/id/${i + 1}/10/10`}
          src={`https://picsum.photos/id/${i + 1}/360/600`}
          width={"100%"}
          height={600}
          observerOptions={{ rootMargin: "-30%" }}
          style={{ objectFit: "cover" }}
        />
      ))}
      <br />
      <br />
      {new Array(5).fill(null).map((el, i) => (
        <Image
          key={i}
          alt={"simple srcset image"}
          srcset={buildSrcset(i)}
          width={"100%"}
        />
      ))}

      {new Array(5).fill(null).map((el, i) => (
        <BackgroundImage
          ariaLabel={"background img"}
          key={i}
          srcset={buildSrcset(i)}
          style={{
            backgroundSize: "cover",
            height: "50vh",
            width: "100%",
          }}
        />
      ))}

      {new Array(5).fill(null).map((el, i) => (
        <Placeholder backgroundColor={"red"} key={i}>
          <BackgroundImage
            key={i}
            //srcset={buildSrcset(i)}
            data={FakeDataUtils.getResponsiveImageData(4 / 3)}
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Placeholder>
      ))}
    </div>
  );
}
