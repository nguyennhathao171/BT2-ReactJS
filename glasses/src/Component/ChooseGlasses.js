import React, { Component } from "react";
import g1 from "../asset/img/g1.jpg";
import g2 from "../asset/img/g2.jpg";
import g3 from "../asset/img/g3.jpg";
import g4 from "../asset/img/g4.jpg";
import g5 from "../asset/img/g5.jpg";
import g6 from "../asset/img/g6.jpg";
import g7 from "../asset/img/g7.jpg";
import g8 from "../asset/img/g8.jpg";
import g9 from "../asset/img/g9.jpg";
import model from "../asset/img/model.jpg";
import v1 from "../asset/img/v1.png";
import v2 from "../asset/img/v2.png";
import v3 from "../asset/img/v3.png";
import v4 from "../asset/img/v4.png";
import v5 from "../asset/img/v5.png";
import v6 from "../asset/img/v6.png";
import v7 from "../asset/img/v7.png";
import v8 from "../asset/img/v8.png";
import v9 from "../asset/img/v9.png";
import style from "./style.module.css";

export default class ChooseGlasses extends Component {
  state = {
    glassImage: v1,
    id:0,
  };
  handleChangeColor = (img,id) => {
    this.setState({
      glassImage: img,
      id:id
    });
  };
  data = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  renderGlass = (id) => {
    return (
      <div>
        <h2>{this.data[id].name}</h2>
        <p>{this.data[id].desc}</p>
      </div>
    );
  };
  render() {
    return (
      <div className={style.body}>
        <div className={style.header}>
          <h2>TRY GLASSES APP ONLINE</h2>
        </div>
        <div className={style.imgRow}>
          <div className={style.img}>
            <img src={model} />
            <div className={style.title}>
              <img src={this.state.glassImage} />
              <div className={style.text}>
                {this.renderGlass(this.state.id)}
              </div>
            </div>
          </div>
          <div className={style.img}>
            <img src={model} />
          </div>
        </div>
        <div className={style.table}>
          <div className={style.row}>
            <div className={style.col}>
              <div className={style.item}>
                <button
                  onClick={() => {
                    this.handleChangeColor(v1,0);
                  }}
                >
                  <img src={g1} />
                </button>
              </div>
            </div>
            <div className={style.col}>
              <div className={style.item}>
                <button
                  onClick={() => {
                    this.handleChangeColor(v2,1);
                  }}
                >
                  <img src={g2} />
                </button>
              </div>
            </div>
            <div className={style.col}>
              <div className={style.item}>
                <button
                  onClick={() => {
                    this.handleChangeColor(v3,2);
                  }}
                >
                  <img src={g3} />
                </button>
              </div>
            </div>
            <div className={style.col}>
              <div className={style.item}>
                <button
                  onClick={() => {
                    this.handleChangeColor(v4,3);
                  }}
                >
                  <img src={g4} />
                </button>
              </div>
            </div>
            <div className={style.col}>
              <div className={style.item}>
                <button
                  onClick={() => {
                    this.handleChangeColor(v5,4);
                  }}
                >
                  <img src={g5} />
                </button>
              </div>
            </div>
            <div className={style.col}>
              <div className={style.item}>
                <button
                  onClick={() => {
                    this.handleChangeColor(v6,5);
                  }}
                >
                  <img src={g6} />
                </button>
              </div>
            </div>
            <div className={style.col}>
              <div className={style.item}>
                <button
                  onClick={() => {
                    this.handleChangeColor(v7,6);
                  }}
                >
                  <img src={g7} />
                </button>
              </div>
            </div>
            <div className={style.col}>
              <div className={style.item}>
                <button
                  onClick={() => {
                    this.handleChangeColor(v8,7);
                  }}
                >
                  <img src={g8} />
                </button>
              </div>
            </div>
            <div className={style.col}>
              <div className={style.item}>
                <button
                  onClick={() => {
                    this.handleChangeColor(v9,8);
                  }}
                >
                  <img src={g9} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
