import React, { Component } from 'react'
import style from './style.module.css'
import model from '../asset/model.jpg'
// import



export default class ChooseGlasses extends Component {
    state = {
        modelImage: model,
    };

    handleChangeGlasses = (img) => {
        this.setState({
            modelImage: img,
        });
    };

    render() {
        return (
            <div className={style.Container}>

                <div className={style.header}>
                    <h1>Try Glass App Online</h1>
                </div>

                <div className={style.Comp}>
                    <div className={style.origin}>
                        <img src={this.state.modelImage} style={{ width: 350 }} />
                    </div>
                    <div className={style.change}>
                        <img src={this.state.modelImage} style={{ width: 350 }}/>
                    </div>
                </div>

                <div className='choose'>
                    
                </div>

            </div>
        )
    }
}
