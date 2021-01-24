import Head from "next/head";
import styles from "./index.module.css";
import ReactBnbGallery from "react-bnb-gallery";
import { useState, useMemo } from "react";
import "react-bnb-gallery/dist/style.css";

type Room =
  | "garderob"
  | "badroom"
  | "livingroom"
  | "bathroom"
  | "kitchen"
  | "lobby"
  | "rest"
  | "all";

const allPhotos = [
  {
    photo: "/images/bathroom/1.jpg",
    room: "bathroom",
    caption: "Ванная комната",
    subcaption: "Пол и стены - плитка",
  },
  {
    photo: "/images/bathroom/2.jpg",
    room: "bathroom",
    caption: "Вот она, такая",
    subcaption: "Обычная в общем-то...",
  },
  {
    photo: "/images/bathroom/3.jpg",
    room: "bathroom",
    caption: "Ролл-дверь",
    subcaption: "Она не очень, но знатно экономит место",
  },
  {
    photo: "/images/bathroom/4.jpg",
    room: "bathroom",
    caption: "Шкафчики и унитаз остаются Вам:)",
    subcaption: "Унитаз тяжелый, не унести...",
  },
  {
    photo: "/images/bathroom/5.jpg",
    room: "bathroom",
    caption: "Стиралка скорее всего уедет с нами",
    subcaption: "Полотенцесушитель тоже переварен на новый",
  },
  {
    photo: "/images/badroom/1.jpg",
    room: "badroom",
    caption: "Уютная спальня",
    subcaption: "Мебель из спальни уедет с нами",
  },
  {
    photo: "/images/badroom/2.jpg",
    room: "badroom",
    caption: "Собака тоже не останется",
    subcaption: "Хотя, это она пожрала обои...",
  },
  {
    photo: "/images/badroom/3.jpg",
    room: "badroom",
    caption: "Собака грустит",
    subcaption: "Сказал ей, что она не останется тут",
  },
  {
    photo: "/images/garderob/1.jpg",
    caption: "Внутри - шкаф-гардероб, но там срачь, фото пока не будет:)",
    subcaption: "Но он есть, это удобно, можно сложить туда всякое",
    room: "garderob",
  },
  {
    photo: "/images/kitchen/1.jpg",
    room: "kitchen",
    caption: "Кухня",
    subcaption:
      "Переклеили тут обои, когда переехали, а потом переварили батареи...",
  },
  {
    photo: "/images/kitchen/2.jpg",
    room: "kitchen",
    caption: "Гарнитур",
    subcaption:
      "Обычный, но он останется новому покупателю, плиту, думаю, тоже можем оставить",
  },
  {
    photo: "/images/kitchen/3.jpg",
    room: "kitchen",
    caption: "Кухня",
    subcaption: "Вот такая она",
  },
  {
    photo: "/images/livingroom/1.jpg",
    room: "livingroom",
    caption: "Зал, он же гостинная",
    subcaption: "Диван оставим Вам. Дверь на балкон, да, он есть.",
  },
  {
    photo: "/images/livingroom/2.jpg",
    room: "livingroom",
    caption: "Гостинная",
    subcaption: "Вот она такая",
  },
  {
    photo: "/images/livingroom/3.jpg",
    room: "livingroom",
    caption: "Шкаф, который за стелажом",
    subcaption:
      "Он огромный, и встроен там вместо стены, соответственно, остается новому хозяину",
  },
  {
    photo: "/images/livingroom/4.jpg",
    room: "livingroom",
    caption: "Рабочее место",
    subcaption: "Сижу тут 24/7",
  },
  {
    photo: "/images/livingroom/5.jpg",
    room: "livingroom",
    caption: "Вот она гостинная",
    subcaption: "Сбоку - дверь в гардероб/кладовку",
  },
  {
    photo: "/images/livingroom/6.jpg",
    room: "livingroom",
    caption: "Собака не продается",
    subcaption: "Просто красивая",
  },
  {
    photo: "/images/livingroom/7.jpg",
    room: "livingroom",
    caption: "Шкаф-купэ",
    subcaption: "Он не модный, но есть",
  },
  {
    photo: "/images/lobby/1.jpg",
    room: "lobby",
    caption: "Прихожая",
    subcaption: "Маленькая она",
  },
  {
    photo: "/images/lobby/2.jpg",
    room: "lobby",
    caption: "Прихожая",
    subcaption: "Ботинки взял, куртку надел - ушёл",
  },
  {
    photo: "/images/lobby/3.jpg",
    room: "lobby",
    caption: "Прихожая",
    subcaption: "Ну вот, да.",
  },
  {
    photo: "/images/lobby/4.jpg",
    room: "lobby",
    caption: "Коридорчик",
    subcaption: "Между прихожей и кухней, зачем он - хз",
  },
  {
    photo: "/images/lobby/6.jpg",
    room: "lobby",
    caption: "Прихожая",
    subcaption: "Тот же шкаф-купэ, с другой стороны",
  },
  {
    photo: "/images/lobby/5.jpg",
    room: "lobby",
    caption: "Прихожая",
    subcaption: "Вид из гостинной",
  },
  {
    photo: "/images/rest/1.jpg",
    room: "rest",
    caption: "Вид из окна",
    subcaption: "Сбоку ЖК 'Астра' - x2 за те же квадратные метры",
  },
  {
    photo: "/images/rest/2.jpg",
    room: "rest",
    caption: "Вид из окна",
    subcaption: "Вот соседний дом",
  },
  {
    photo: "/images/rest/3.jpg",
    room: "rest",
    caption: "Вот он 25-й дом",
    subcaption: "Весь в зелени",
  },
];

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState<Room | undefined>(undefined);

  const photos = useMemo(() => {
    if (selectedRoom === "all") {
      return allPhotos;
    }
    return allPhotos.filter((item) => item.room === selectedRoom);
  }, [selectedRoom]);

  return (
    <div className={styles.container}>
      {!!selectedRoom && (
        <ReactBnbGallery
          show={!!selectedRoom}
          photos={photos}
          onClose={() => setSelectedRoom(undefined)}
        />
      )}
      <Head>
        <title>Танковая 25. Продаём квартиру</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Продаём квартиру на{" "}
          <a href="https://go.2gis.com/wjk4j" target="blank">
            Танковой 25
          </a>{" "}
          🏠
        </h1>
        <p className={styles.description}>
          <code className={styles.code}>
            #Новосибирск #Заельцовская #двушка #хрущёвка
          </code>
        </p>
        <div className={styles.text}>
          <h2 className={styles.info}>В "двух" словах</h2>
          <i>Уютная</i> двухкомнатная квартира на Танковой. <br />
          Площадь <i>43 м²</i>
          , не после бабушки, но требует косметического ремонта -
          <br /> наглая молодая и невоспитанная собака кое-где погрызла обои.
          <br />
          Удобный 5️⃣ этаж - никто сверху не топает. Есть балкон 💃
          <br />
          Всё отопление переварено, потолки ровные.
          <br />
          До метро <i>Заельцовская</i> 15-20 минут пешком 🚶
          <br />
          Под боком Ипподромка 🚘, но ее не слышно, так как район - в глубине.
          <br />
          Можем много всего оставить (по договоренности): диван, кухня, плита,
          гардероб, шкафы - можно заехать и жить 👑
          <br />
          Летом во дворах очень зелено 🏡
        </div>
        <h2 className={styles.text}>Нажми на комнату - получишь фотки</h2>
        <div className={styles.grid}>
          <div
            className={[styles.garderob, styles.room].join(" ")}
            onClick={() => setSelectedRoom("garderob")}
          >
            Гардероб 👔
          </div>
          <div
            className={[styles.livingroom, styles.room].join(" ")}
            onClick={() => setSelectedRoom("livingroom")}
          >
            Гостинная 📺
          </div>
          <div
            className={[styles.lobby, styles.room].join(" ")}
            onClick={() => setSelectedRoom("lobby")}
          >
            Прихожая 👟
          </div>
          <div
            className={[styles.badroom, styles.room].join(" ")}
            onClick={() => setSelectedRoom("badroom")}
          >
            Спальня 🛏
          </div>
          <div className={styles.placeholder}></div>
          <div className={styles.placeholder}></div>
          <div
            className={[styles.bathroom, styles.room].join(" ")}
            onClick={() => setSelectedRoom("bathroom")}
          >
            Сан.узел 🧻
          </div>
          <div
            className={[styles.kitchen, styles.room].join(" ")}
            onClick={() => setSelectedRoom("kitchen")}
          >
            Кухня 🍕
          </div>
        </div>
        <h2 className={styles.text}>
          <a className={styles.link} onClick={() => setSelectedRoom("rest")}>
            Тут
          </a>{" "}
          фотки дома и вид из окна. А{" "}
          <a className={styles.link} onClick={() => setSelectedRoom("all")}>
            здесь
          </a>{" "}
          все фотки, если не хочешь тыкать по комнатам.
        </h2>
        <div>
          <h2 className={styles.info}>Что по деньгам</h2>
          <div className={styles.price}>3,3 млн ₽</div>
          <div className={(styles.text, styles._center)}>
            Хорошим людям - скидка 🤙🏻
          </div>
        </div>
        <div>
          <h2 className="text">Пишите, звоните</h2>
          <div>
            <span className={styles.contact}>
              <img src="/contact.svg" alt="телефон" className={styles.icon} />
              <a className={styles.link} href="tel:+79138995008">
                +7(913)8995008
              </a>
            </span>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vk.com/vodolazskikh_alexander"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Кликни, и пиши мне в</span>{" "}
          <img src="/vk.svg" alt="телефон" className={styles.icon32} />
        </a>
      </footer>
    </div>
  );
}
