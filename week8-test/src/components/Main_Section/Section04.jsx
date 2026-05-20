import React from "react";

function Section04() {
  return (
    <section className="Section04_wrap">
      <h3>
        CORE-VALUES<br />
        <em>GROUND-RULES</em>
      </h3>
      <div className="Section04_values">
        
        <div className="value_circle">
          <h3>Commitiment</h3>
          <p>정직 : Honesty</p>
          <p>존중 : Respect</p>
          <p>신뢰 : Trust</p>
        </div>

        
        <div className="value_circle">
          <h3>Challenge</h3>
          <p className="orange">개척 : Pioneer</p>
          <p className="orange">집착 : Obsession</p>
          <p>탁월 : Excellence</p>
        </div>

        
        <div className="value_circle">
          <h3>Companionship</h3>
          <p>다양성 : Diversity</p>
          <p>배려 : Consideration</p>
          <p>소통 : Communication</p>
        </div>
      </div>
    </section>
  );
}

export default Section04;