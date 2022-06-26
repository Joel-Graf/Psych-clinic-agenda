import React, { useState } from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';




export default function TermsOfUse({ termsAccepted }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [radioCheck, setRadioCheck] = useState();

    return (

        <Accordion style={{ width: '80%' }} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <AccordionTab style={{ width: '100%', height: '100%' }} header="Termos de uso">
                <div>
                    {/* TODO: Colocar o texto correto aqui */}
                    I Content I Content I Content I Content I Content I Content I
                    I Content I Content I Content I Content I Content I Content I
                    I Content I Content I Content I Content I Content I Content I
                    I Content I Content I Content I Content I Content I Content I
                    I Content I Content I Content I Content I Content I Content I
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, margin: 20 }}>
                        <span> Declaro que li e concordo com os termos de uso </span>
                        <RadioButton label='teste' value="val1" name="city" onChange={(e) => setRadioCheck(e.value)} checked={radioCheck === 'val1'} />
                    </div>

                    <Button
                        disabled={radioCheck === 'val1' ? false : true}
                        label="Continuar"
                        icon="pi pi-arrow-right"
                        iconPos="right"
                        onClick={() => termsAccepted()}
                        style={{width:'20%'}}
                    />
                </div>
            </AccordionTab>
        </Accordion>

    )
}