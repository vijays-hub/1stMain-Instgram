import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Post from "./Posts/Post";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-1">
        <Home />
        <hr style={{ background: "grey" }} />
        <Post
          urls={[
            "https://instagram.fixe1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c239.0.800.800a/s640x640/130930235_380772419692281_4504934855645114428_n.jpg?_nc_ht=instagram.fixe1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=OZcWQCT80-sAX_dM3M-&tp=1&oh=0e8d8c283855e471e4f19f82edd732eb&oe=600182AE",
            "https://instagram.fixe1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.120.960.960a/s640x640/130713327_1055122574936077_3149198467317274072_n.jpg?_nc_ht=instagram.fixe1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=avDppnyIFkwAX9px5LA&tp=1&oh=651e688ca3cb9e9db4dc15e12d5b0dc8&oe=600419A8",
            "https://instagram.fixe1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c213.0.853.853a/s640x640/129732312_2849689725354058_6850632574559912282_n.jpg?_nc_ht=instagram.fixe1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=fyGpQrhlmlUAX9RSywS&tp=1&oh=549fc2422699d0cc826f6eb73a185918&oe=60014E47",
          ]}
        />

        <Post
          urls={[
            "https://instagram.fixe1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/129433351_1552208975166938_6844700013702943656_n.jpg?_nc_ht=instagram.fixe1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=6aNyYKQ0h2QAX_g-bHd&tp=1&oh=48b9bc4c879d9a7ed2c73b7eb36ceb27&oe=60027B0A",
            "https://instagram.fixe1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/125559625_692744114711165_3435005613260473464_n.jpg?_nc_ht=instagram.fixe1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=_uGX7MZuG8QAX-ybBg2&tp=1&oh=3a9978ec885e4e708e4544442997b6a9&oe=6001D966",
            "https://instagram.fixe1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c145.0.733.733a/s640x640/129397025_412723249901927_7272295369088352154_n.jpg?_nc_ht=instagram.fixe1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=qg_gC-C6JTEAX-8TTV5&tp=1&oh=f0423f7de534d6352e7b56274a786664&oe=6001AEC0",
          ]}
        />

        <Post
          urls={[
            "https://instagram.fixe1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c213.0.853.853a/s640x640/129732312_2849689725354058_6850632574559912282_n.jpg?_nc_ht=instagram.fixe1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=fyGpQrhlmlUAX9RSywS&tp=1&oh=549fc2422699d0cc826f6eb73a185918&oe=60014E47",
            "https://instagram.fixe1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.120.960.960a/s640x640/130713327_1055122574936077_3149198467317274072_n.jpg?_nc_ht=instagram.fixe1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=avDppnyIFkwAX9px5LA&tp=1&oh=651e688ca3cb9e9db4dc15e12d5b0dc8&oe=600419A8",
            "https://instagram.fixe1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c239.0.800.800a/s640x640/130930235_380772419692281_4504934855645114428_n.jpg?_nc_ht=instagram.fixe1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=OZcWQCT80-sAX_dM3M-&tp=1&oh=0e8d8c283855e471e4f19f82edd732eb&oe=600182AE",
          ]}
        />

        <Post
          urls={[
            "https://instagram.fixe1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/125559625_692744114711165_3435005613260473464_n.jpg?_nc_ht=instagram.fixe1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=_uGX7MZuG8QAX-ybBg2&tp=1&oh=3a9978ec885e4e708e4544442997b6a9&oe=6001D966",
            "https://instagram.fixe1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/129433351_1552208975166938_6844700013702943656_n.jpg?_nc_ht=instagram.fixe1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=6aNyYKQ0h2QAX_g-bHd&tp=1&oh=48b9bc4c879d9a7ed2c73b7eb36ceb27&oe=60027B0A",
            "https://instagram.fixe1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c145.0.733.733a/s640x640/129397025_412723249901927_7272295369088352154_n.jpg?_nc_ht=instagram.fixe1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=qg_gC-C6JTEAX-8TTV5&tp=1&oh=f0423f7de534d6352e7b56274a786664&oe=6001AEC0",
          ]}
        />
      </div>
    </>
  );
}

export default App;
