import React from "react";
import { useMediaQuery } from "react-responsive";
import imgService1 from "@/src/images/image-service-1.jpg";
import imgService2 from "@/src/images/image-service-2.jpg";

interface ResponsiveImageProps {
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  className = "",
}) => {
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  const imageSrc = isMobile ? imgService1 : imgService2;

  return (
    <img
      src={imageSrc}
      alt="Responsive"
      style={{ width: "100%", height: "auto" }}
      className={className}
    />
  );
};

export default ResponsiveImage;
