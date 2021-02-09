import React from "react";
import Icon1 from "../../images/mbPayment.svg";
import Icon2 from "../../images/online.svg";
import Icon3 from "../../images/wallet.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Payment Method</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Mobile Payment</ServicesH2>
            <ServicesP>
              Mobile payment generally refer to payment services operated under
              financial regulation and performed from or via a mobile device
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Online Payment</ServicesH2>
            <ServicesP>
              The customer enters their payment information into an online
              checkout form, so they can pay for something
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Cash Payment</ServicesH2>
            <ServicesP>
              A cash payment is bills or coins paid by the recipient of goods or
              services to the provider
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
