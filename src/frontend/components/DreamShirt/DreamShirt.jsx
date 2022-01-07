import React, { useState } from 'react'
import './DreamShirt.css'

import Header from '../BasePage/components/Header/Header'

const DreamShirt = () => {

  const [isChosenNormal, setIsChosenNormal] = useState("")
  const [isChosenPolo, setIsChosenPolo] = useState("")
  const [isChosenRegata, setIsChosenRegata] = useState("")
  const [activeChangeShirtButtom, setActivieChangeShirtButtom] = useState(false)

  const [customizationState, setCustomizationState] = useState("chosenTypeOfShirt")
  const [chosen, setChosen] = useState("")

  const chosenShirt = (type) => {
    switch (type) {
      case 'Normal':
        setChosen('Normal')
        setIsChosenNormal('chosen')
        setIsChosenPolo('notChosen')
        setIsChosenRegata('notChosen')
        changeToCustomization()
        break;
      case 'Polo':
        setChosen('Polo')
        setIsChosenNormal('notChosen')
        setIsChosenPolo('chosen')
        setIsChosenRegata('notChosen')
        changeToCustomization()
        break;
      case 'Regata':
        setChosen('Regata')
        setIsChosenNormal('notChosen')
        setIsChosenPolo('notChosen')
        setIsChosenRegata('chosen')
        changeToCustomization()
        break;
      default:
    }
  }

  function changeToCustomization() {
    setTimeout(function () { setCustomizationState("customizationShirt"); }, 1500);
  }

  const loading = <div className='LoadingDreamShirt'>
    <img src="./DreamShirtLogo.png" className='LoadingDreamShirtLogo' alt="" />
    <div className='LoadingDreamShirtCircleAnimation'>
      <div className="circle">
        <div className='outer-circle' />
        <div className='inner-circle' />
        <div className='box box-top-left' />
        <div className='box box-bottom-left' />
        <div className='box box-bottom-right' />
        <div className='box box-top-right' />
      </div>
    </div>
  </div>

  const chosenTypeOfShirt = <div className='DreamShirt'>
    <h2>
      Escolha o modelo da camisa
    </h2>
    <div className='shirtIconsContainer'>
      <img className={`shirtIcons ${isChosenNormal}`} onClick={() => chosenShirt('Normal')} src="./iconeNormal.png" alt="Camisa Normal" />
      <img className={`shirtIcons ${isChosenPolo}`} onClick={() => chosenShirt('Polo')} src="./iconePolo.png" alt="Camisa Polo" />
      <img className={`shirtIcons ${isChosenRegata}`} onClick={() => chosenShirt('Regata')} src="./iconeRegata.png" alt="Camisa Regata" />
    </div>
  </div>

  const customizationShirt = <div className='DreamShirt'>
    <h2>
      Hora de customizar do seu jeito
    </h2>
    <div className='shirtIconsContainer'>
      <img className={`shirtToEdit`} src={`./icone${chosen}.png`} alt="Camisa Para Customizar" />
    </div>
  </div>

  const returnToChosenTypeOfShirtButtom = <button className='buttomReturnToSelectTypeOfShirt'>
    Voltar para Tipos
  </button>

  // TODO estratégia usada acredito ter sido errado, melhor utilizar rotas como o router, assim além de salvar a navegação sera melhor para as animações
  // e transferencia de propriedades, ou seja refatorar boa parte do código para introduzir as rotas ou componentes que se comunicam por props

  return (
    <>
      <Header />
      {loading}
      {customizationState === "customizationShirt" ? returnToChosenTypeOfShirtButtom : "" }
      {customizationState === 'chosenTypeOfShirt' ? chosenTypeOfShirt : customizationState === 'customizationShirt' ? customizationShirt : "erro nos passos"}
    </>
  )
}

export default DreamShirt
