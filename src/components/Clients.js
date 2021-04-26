import React from "react";
import Section from "elements/Section";
import Fade from 'react-reveal/Fade';

import client01 from 'assets/images/clients-01.svg';
import client02 from 'assets/images/clients-02.svg';
import client03 from 'assets/images/clients-03.svg';
import client04 from 'assets/images/clients-04.svg';
import client05 from 'assets/images/clients-05.svg';

export default function client() {
    return (
        <Section className="clients">
            <Fade bottom delay={2000}>
                <div className="container">
                    <div className="clients-inner section-inner has-top-divider has-bottom-divider">
                        <ul className="list-reset">
                            <li>
                                <img src={client01} alt="client 01" />
                            </li>
                            <li>
                                <img src={client02} alt="client 02" />
                            </li>
                            <li>
                                <img src={client03} alt="client 03" />
                            </li>
                            <li>
                                <img src={client04} alt="client 04" />
                            </li>
                            <li>
                                <img src={client05} alt="client 05" />
                            </li>
                        </ul>
                    </div>
                </div>
            </Fade>
        </Section>
    );
}
