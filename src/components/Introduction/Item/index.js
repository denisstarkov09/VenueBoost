import React from "react";

import "./index.css";
import FormText from "../../FormText";

const FeatureItem = ({ icon, title, comment }) => {
  return (
    <div className="flex flex-col justify-start lg:px-8 md:px-6 mb-10 lg:mb-0">
      <div>
        <img src={icon.default} width={48} height={48} />
      </div>
      <FormText type="itemtitle" customClass="mt-5 mb-5" title={title} />
      <FormText type="subtitle" customClass="text-sm" title={comment} />
    </div>
  );
};

export default FeatureItem;
