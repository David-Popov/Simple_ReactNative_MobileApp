import { ImageSource, Image } from "expo-image";
import { View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type Props = {
    imageSize: number;
    stickerSource: ImageSource;
};

const EmojiSticker = ({ imageSize, stickerSource }: Props) => {
    const scaleImage = useSharedValue(imageSize);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const doubleTapGesture = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== imageSize * 2) {
                scaleImage.value = scaleImage.value * 2;
            } else {
                scaleImage.value = Math.round(scaleImage.value / 2);
            }
        });

    const dragGesture = Gesture.Pan().onChange((event) => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    });

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                },
            ],
        };
    });

    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });

    return (
        <GestureDetector gesture={dragGesture}>
            <Animated.View
                style={[containerStyle, { top: -350, marginTop: 5 }]}
            >
                <GestureDetector gesture={doubleTapGesture}>
                    <Animated.Image
                        source={stickerSource}
                        resizeMode="contain"
                        style={[
                            imageStyle,
                            { width: imageSize, height: imageSize },
                        ]}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    );
};

export default EmojiSticker;
