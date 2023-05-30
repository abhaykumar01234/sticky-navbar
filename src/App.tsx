import { ReactComponent as Image1 } from "~/assets/image1.svg";
import { ReactComponent as Image2 } from "~/assets/image2.svg";
import { ReactComponent as Image3 } from "~/assets/image3.svg";
import { ReactComponent as Image4 } from "~/assets/image4.svg";
import { ReactComponent as Image5 } from "~/assets/image5.svg";
import { ReactComponent as Image6 } from "~/assets/image6.svg";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <section id="portfolio">
        <div className="left">
          <Image1 />
        </div>
        <div className="right">
          <h2>Portfolio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            ullam quo vitae labore ipsum nihil reprehenderit provident fuga
            cumque iure illum repellat eveniet porro ab voluptatum iusto illo
            rem neque laudantium maxime, nobis praesentium quibusdam
            necessitatibus architecto! Recusandae soluta, eum non quod nam
            praesentium ipsam. Voluptas praesentium maxime nisi cumque.
          </p>
        </div>
      </section>
      <section id="skills">
        <div className="left">
          <Image2 />
        </div>
        <div className="right">
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            similique error eligendi libero optio modi esse repudiandae et
            molestias. Nam, doloribus hic veritatis corporis expedita doloremque
            suscipit. Dolores asperiores blanditiis inventore, animi adipisci
            error tempore dolorem provident magni, velit maiores quae, repellat
            earum est explicabo non laborum in ipsam dicta!
          </p>
        </div>
      </section>
      <section id="about">
        <div className="left">
          <Image3 />
        </div>
        <div className="right">
          <h2>About</h2>
          <p>
            Ad, dolore? Harum id veniam deleniti velit, fugiat at similique
            alias eaque tenetur repellat facilis quia vero atque esse nobis et
            perferendis ut, reprehenderit ex debitis. Porro, facere numquam
            ipsam alias quas ab quos impedit aspernatur. Corrupti inventore
            aspernatur ullam consequatur, asperiores quam ut sed! Hic expedita
            tenetur quas. Dolore.
          </p>
        </div>
      </section>
      <section id="contact">
        <div className="left">
          <Image4 />
        </div>
        <div className="right">
          <h2>Contact</h2>
          <p>
            Vero nisi, accusamus eius obcaecati nemo necessitatibus ex numquam
            velit quos voluptas. Tempore, rem molestiae? Consequuntur ab
            molestiae accusantium asperiores distinctio iste, quo nulla
            laboriosam iusto, vero ipsum labore in necessitatibus atque
            cupiditate beatae quisquam voluptatibus laborum? Voluptatibus ullam
            eligendi eius rem repellendus, quas consectetur recusandae iure,
            velit atque officia!
          </p>
        </div>
      </section>
      <section id="marketing">
        <div className="left">
          <Image5 />
        </div>
        <div className="right">
          <h2>Marketing</h2>
          <p>
            Quae iure reiciendis, aut perspiciatis nemo doloribus cumque eum
            voluptas voluptatum corrupti dolores maiores cupiditate quos laborum
            maxime neque, repudiandae mollitia laboriosam vero doloremque sit
            officiis id nobis labore! Voluptatem perferendis deleniti est
            nostrum assumenda veritatis tempora distinctio nam laboriosam esse
            commodi, ex qui enim sapiente soluta modi neque exercitationem?
          </p>
        </div>
      </section>
      <section id="social-media">
        <div className="left">
          <Image6 />
        </div>
        <div className="right">
          <h2>Social Media</h2>
          <p>
            Saepe deleniti unde sint commodi libero perferendis quos distinctio
            ut aperiam blanditiis maxime quidem neque quisquam ipsum facilis
            magnam enim necessitatibus provident ducimus natus adipisci
            voluptatibus cupiditate, inventore accusantium! Rerum reiciendis
            laboriosam sit molestias amet quos eligendi enim. Reiciendis quasi
            est saepe nesciunt quo perferendis debitis omnis magnam suscipit
            assumenda?
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
