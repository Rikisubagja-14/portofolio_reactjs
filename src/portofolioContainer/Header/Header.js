import React, { useState } from 'react'
import { TOTAL_SCREENS, GET_SCREENS_INDEX} from '../../utilities/commonUtils'
import ScrollService from '../../utilities/ScrollService'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'
export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState(0)
    const [showHeaderOptions,setShowHeaderOptions] = useState(false)

    const updateCurrentScreen= (currentScreen) => {
        if (!currentScreen || currentScreen.screenInView)
        return;

        let screenIndex = GET_SCREENS_INDEX(currentScreen.screenInView)
        if(screenIndex <  0)
        return;
    }

    let currentScreenSubscription = ScrollService.currentScreenBrodCaster.subscribe(updateCurrentScreen)

    const getHeaderOptions = () => {
        return(
            TOTAL_SCREENS.map((screen, i) => {
                <div key={screen.screen_name} className={getHeaderOptionsClass(i)}
                onClick={() => switchScreen(i, screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            })
        )
    }

    const getHeaderOptionsClass = () => {

    }
  return (
    <div>Header</div>
  )
}
