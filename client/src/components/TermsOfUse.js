import React, { useState } from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';




export default function TermsOfUse({ termsAccepted }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [radioCheck, setRadioCheck] = useState();

    return (

        <Accordion style={{ width: '80%', textAlign: 'initial', margin: 60 }} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <AccordionTab style={{ width: '100%', height: '100%' }} header="Termos de uso">
                <div>
                    <h3> CLÁUSULA PRIMEIRA </h3>

                    Dados Pessoais

                    O Titular autoriza a Controladora a realizar o tratamento, ou seja, a utilizar os seguintes dados pessoais, para os fins que serão relacionados na cláusula segunda:

                    <p>  Nome completo </p>

                    <p> Números de telefone (WhatsApp) </p>

                    <p> Endereços de e-mail </p>

                    <h3> CLÁUSULA SEGUNDA </h3>

                    Finalidade do Tratamento dos Dados

                    O Titular autoriza que a Controladora utilize os dados pessoais e dados pessoais sensíveis listados neste termo para as seguintes finalidades:

                    <p> Permitir que a Controladora identifique e entre em contato com o titular, em razão dos serviços prestados</p>

                    <p> Para cumprimento, pela Controladora, de obrigações impostas por órgãos de fiscalização </p>

                    <p> A pedido do titular dos dados </p>

                    <p> Para o exercício regular de direitos em processo judicial, administrativo ou arbitral </p>

                    <p> Para a proteção da vida ou da incolumidade física do titular ou de terceiros </p>

                    <p> Para a tutela da saúde, exclusivamente, em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária </p>

                    <p> Quando necessário para atender aos interesses legítimos do controlador ou de terceiros, exceto no caso de prevalecerem direitos e liberdades fundamentais do titular que exijam a proteção dos dados pessoais </p>

                    <p> <h5> Parágrafo Primeiro: </h5> Caso seja necessário o compartilhamento de dados com terceiros que não tenham sido relacionados nesse termo ou qualquer alteração contratual posterior, será ajustado novo termo de consentimento para este fim (§ 6° do artigo 8° e § 2° do artigo 9° da Lei n° 13.709/2018).</p>

                    <p> <h5> Parágrafo Segundo: </h5> Em caso de alteração na finalidade, que esteja em desacordo com o consentimento original, a Controladora deverá comunicar o Titular, que poderá revogar o consentimento, conforme previsto na cláusula sexta. </p>

                    <h3> CLÁUSULA TERCEIRA </h3>

                    <p> Compartilhamento de Dados </p>

                    <p> A Controladora fica autorizada a compartilhar os dados pessoais do Titular com outros agentes de tratamento de dados, caso seja necessário para as finalidades listadas neste instrumento, desde que, sejam respeitados os princípios da boa-fé, finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação e responsabilização e prestação de contas. </p>

                    <h3> CLÁUSULA QUARTA </h3>

                    <p> Responsabilidade pela Segurança dos Dados</p>

                    <p> A Controladora se responsabiliza por manter medidas de segurança, técnicas e administrativas suficientes a proteger os dados pessoais do Titular e à Autoridade Nacional de Proteção de Dados (ANPD), comunicando ao Titular, caso ocorra algum incidente de segurança que possa acarretar risco ou dano relevante, conforme artigo 48 da Lei n° 13.709/2020.</p>

                    <h3> CLÁUSULA QUINTA </h3>

                    <p> Término do Tratamento dos Dados</p>

                    <p> À Controladora, é permitido manter e utilizar os dados pessoais do Titular durante todo o período contratualmente firmado para as finalidades relacionadas nesse termo e ainda após o término da contratação para cumprimento de obrigação legal ou impostas por órgãos de fiscalização, nos termos do artigo 16 da Lei n° 13.709/2018.</p>

                    <h3> CLÁUSULA SEXTA </h3>

                    Direito de Revogação do Consentimento
                    O Titular poderá revogar seu consentimento, a qualquer tempo, por e-mail ou por carta escrita, conforme o artigo 8°, § 5°, da Lei n° 13.709/2020.
                    O Titular fica ciente de que a Controladora poderá permanecer utilizando os dados para as seguintes finalidades:

                    <p> Para cumprimento de obrigações decorrentes da legislação trabalhista e previdenciária, incluindo o disposto em Acordo ou Convenção Coletiva da categoria da Controladora </p>

                    <p> Para cumprimento, pela Controladora, de obrigações impostas por órgãos de fiscalização </p>

                    <p> Para o exercício regular de direitos em processo judicial, administrativo ou arbitral </p>

                    <p> Para a proteção da vida ou da incolumidade física do titular ou de terceiros </p>

                    <p> Para a tutela da saúde, exclusivamente, em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária </p>

                    <p> Quando necessário para atender aos interesses legítimos do controlador ou de terceiros, exceto no caso de prevalecerem direitos e liberdades fundamentais do titular que exijam a proteção dos dados pessoais.</p>


                    <h3> CLÁUSULA SÉTIMA </h3>

                    <p> Vazamento de Dados ou Acessos Não Autorizados – Penalidades </p>

                    <p> As partes poderão entrar em acordo, quanto aos eventuais danos causados, caso exista o vazamento de dados pessoais ou acessos não autorizados, e caso não haja acordo, a Controladora tem ciência que estará sujeita às penalidades previstas no artigo 52 da Lei n° 13.709/2018:</p>

                    <p> Cidade/UF, dia, mês e ano.</p>

                    <span>
                        Assinaturas:

                        ________________________________________

                        Nome do Contratante (Titular)

                        Psicodevlicos S.A________________________

                        Nome do Empregador (Controlador)
                    </span>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
                        style={{ width: '20%' }}
                    />
                </div>
            </AccordionTab>
        </Accordion>

    )
}