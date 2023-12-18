import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Remove the script tag for jQuery

function CounterBox2() {
    const [counts, setCounts] = useState({
        linesOfCode: 0,
        projectsDone: 0,
        happyClients: 0,
        cupsOfCoffee: 0
    });

    useEffect(() => {
        const animateCounting = (targetCount, key) => {
            let currentCount = 0;
            const duration = 3000;
            const increment = Math.ceil(targetCount / (duration / 15));

            const counterInterval = setInterval(() => {
                currentCount += increment;
                if (currentCount >= targetCount) {
                    currentCount = targetCount;
                    clearInterval(counterInterval);
                }
                setCounts((prevCounts) => ({ ...prevCounts, [key]: currentCount }));
            }, 15);
        };

        // Usage
        animateCounting(2000, "linesOfCode");
        animateCounting(480, "projectsDone");
        animateCounting(120, "happyClients");
        animateCounting(5000000, "cupsOfCoffee");

    }, []);

    return (
        <Wrapper>
            <section
                id="counter-stats"
                className="wow fadeInRight"
                data-wow-duration="1.4s"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6 stats">
                            <img src="/images/icons/tests-white.svg" alt="" />
                            <div className="counting" data-count={counts.linesOfCode}>
                                {counts.linesOfCode}+
                            </div>
                            <h5>Tests</h5>
                        </div>

                        <div className="col-lg-3 col-6 stats">
                            <img src="/images/icons/test-bottle.svg" alt="" />
                            <div className="counting" data-count={counts.projectsDone}>
                                {counts.projectsDone}+
                            </div>
                            <h5>Types of tests</h5>
                        </div>

                        <div className="col-lg-3 col-6 stats">
                            <img src="/images/icons/hospital-white.svg" alt="" />
                            <div className="counting" data-count={counts.happyClients}>
                                {counts.happyClients}+
                            </div>
                            <h5>Centers</h5>
                        </div>

                        <div className="col-lg-3 col-6 stats">
                            <img src="/images/icons/customers-white.svg" alt="" />
                            <div className="counting" data-count={counts.cupsOfCoffee}>
                                {counts.cupsOfCoffee}+
                            </div>
                            <h5>Customers</h5>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
}

export default CounterBox2;

const Wrapper = styled.section`

section#counter-stats {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 50px;
	display: flex;
	justify-content: center;
	${'' /* margin-top: 100px; */}
}

.stats {
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  color: white;
  .counting{
    color: white;
  }
}

.stats img {
  width: 50px;
}

/*/ end count stats /*/
`
