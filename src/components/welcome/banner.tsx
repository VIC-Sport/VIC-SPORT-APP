import { APP_COLOR } from "@/utils/constant";
import { WelcomeData } from "@/utils/WelcomeData";
import * as React from "react";
import { Dimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination
} from "react-native-reanimated-carousel";
import Slide from "./slide";

const data = [...new Array(3).keys()];
const width = Dimensions.get("window").width;

function BannerWelcome() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true
    });
  };

  return (
    <View style={{ flex: 0.5 }}>
      <Carousel
        ref={ref}
        width={width}
        height={undefined}
        data={WelcomeData}
        onProgressChange={progress}
        scrollAnimationDuration={600}
        renderItem={({ item }) => (
          <Slide
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
        )}
      />

      <Pagination.Basic
        activeDotStyle={{ backgroundColor: APP_COLOR.PURPLE }}
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5 }}
        onPress={onPressPagination}
      />
    </View>
  );
}

export default BannerWelcome;
