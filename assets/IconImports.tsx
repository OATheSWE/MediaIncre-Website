// Exporting Icons from IconImport.tsx
import { AntDesign, Entypo, Feather, FontAwesome6, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons  } from "@expo/vector-icons";

const IconImports = {
  ShoppingCart: (props: any) => <AntDesign name="shoppingcart" {...props} />,
  WebPage: (props: any) => <MaterialIcons name="web" {...props} />,
  GlassChart: (props: any) => <FontAwesome6 name="magnifying-glass-chart" {...props} />,
  Bulb: (props: any) => <Foundation name="lightbulb" {...props} />,
  Handshake: (props: any) => <FontAwesome6 name="handshake-simple" {...props} />,
  Email: (props: any) => <Entypo name="email" {...props} />,
  Phone: (props: any) => <Feather name="phone" {...props} />,
  Location: (props: any) => <Feather name="map-pin" {...props} />,
  Sun: (props: any) => <Fontisto name="day-sunny" {...props} />,
  Twitter: (props: any) => <FontAwesome6 name="x-twitter" {...props} />,
  Instagram: (props: any) => <AntDesign name="instagram" {...props} />,
  Advert: (props: any) => <MaterialCommunityIcons name="billboard" {...props} />,
  PaidAds: (props: any) => <FontAwesome6 name="magnifying-glass-dollar" {...props} />,
  EmailMarket: (props: any) => <FontAwesome6 name="envelope-open-text" {...props} />,
  SMM: (props: any) => <Ionicons name="chatbubble-ellipses" {...props} />,
  Photo: (props: any) => <MaterialIcons name="video-camera-back" {...props} />,


};

export { IconImports };