mod utils;
use image;
use photon_rs::channels::{alter_blue_channel, alter_green_channel, alter_red_channel};
use photon_rs::conv::{box_blur, detect_horizontal_lines, sharpen};
use photon_rs::monochrome::grayscale;
use photon_rs::native::open_image_from_bytes;
use photon_rs::PhotonImage;
use photon_rs::transform::{compress, crop, fliph, flipv, resize, SamplingFilter};
use wasm_bindgen::prelude::*;
use photon_rs::effects::inc_brightness;
use photon_rs::filters::filter;
use photon_rs::text::{draw_text, draw_text_with_border};

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);

}

#[wasm_bindgen]
pub fn green_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    alter_green_channel(&mut photon_image, 204_i16);
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn red_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    alter_red_channel(&mut photon_image, 200_i16);
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn blue_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    alter_blue_channel(&mut photon_image, 200_i16);
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn grayscale_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    grayscale(&mut photon_image);
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn flip_horizontal_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    fliph(&mut photon_image);
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn flip_vertical_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    flipv(&mut photon_image);
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn blur_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    box_blur(&mut photon_image);
    let return_img = photon_image.get_bytes();
    return_img
}



#[wasm_bindgen]
pub fn crop_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    let cropped_image:PhotonImage = crop(&mut photon_image, 0_u32, 0_u32, 200_u32, 400_u32);
    let return_img = cropped_image.get_bytes();
    return_img
}


#[wasm_bindgen]
pub fn resize_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    let resize_image:PhotonImage = resize(&mut photon_image,100,100,SamplingFilter::Lanczos3);
    let return_img = resize_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn compress_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    let compressed_image= compress(&mut photon_image,250);
    let return_img = compressed_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn inc_brightness_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    inc_brightness(&mut photon_image,70_u8);
    let return_img = photon_image.get_bytes();
    return_img
}


#[wasm_bindgen]
pub fn oceanic_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    filter(&mut photon_image,"oceanic");
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn golden_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    filter(&mut photon_image,"golden");
    let return_img = photon_image.get_bytes();
    return_img
}


#[wasm_bindgen]
pub fn seagreen_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    filter(&mut photon_image,"seagreen");
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn vintage_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    filter(&mut photon_image,"vintage");
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn bluechrome_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    filter(&mut photon_image,"bluechrome");
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn pastelpink_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    filter(&mut photon_image,"pastel_pink");
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn lofi_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    filter(&mut photon_image,"lofi");
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn obsidian_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    filter(&mut photon_image,"obsidian");
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn firenze_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    filter(&mut photon_image,"firenze");
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn dramatic_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    filter(&mut photon_image,"dramatic");
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn perfume_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    filter(&mut photon_image,"perfume");
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn twenties_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    filter(&mut photon_image,"twenties");
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn liquid_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    filter(&mut photon_image,"liquid");
    let return_img = photon_image.get_bytes();
    return_img
}



#[wasm_bindgen]
pub fn draw_text_border_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    draw_text_with_border(&mut photon_image,"Welcome to photon", 50_u32,50_u32);
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn draw_text_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    draw_text(&mut photon_image,"Welcome to photon", 10_u32,10_u32);
    let return_img = photon_image.get_bytes();
    return_img
}


#[wasm_bindgen]
pub fn sharpen_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    sharpen(&mut photon_image);
    let return_img = photon_image.get_bytes();
    return_img
}

#[wasm_bindgen]
pub fn detect_horizontal_image_processor(data: Vec<u8>) -> Vec<u8> {
    let mut photon_image = open_image_from_bytes(&*data).unwrap();
    detect_horizontal_lines(&mut photon_image);
    let return_img = photon_image.get_bytes();
    return_img
}




mod test {
    use photon_rs::native::open_image;
    use crate::{blue_image_processor, blur_image_processor, flip_horizontal_image_processor, flip_vertical_image_processor, grayscale_image_processor, green_image_processor, inc_brightness_image_processor, red_image_processor};

    #[test]
fn green_image_processor_test() {
    let mut img = open_image("www/resources/git lgo.png").expect("File should open");
    let data = img.get_bytes();
    let array_size_after_image_processing = green_image_processor(data).len();
    assert_eq!(array_size_after_image_processing, 7634)
}


#[test]
fn red_image_processor_test() {
    let mut img = open_image("www/resources/git lgo.png").expect("File should open");
    let data = img.get_bytes();
    let array_size_of_image_after_processing = red_image_processor(data).len();
    assert_eq!(array_size_of_image_after_processing, 7624)
}

#[test]
fn blue_image_processor_test() {
    let mut img = open_image("www/resources/git lgo.png").expect("File should open");
    let data = img.get_bytes();
    let array_size_of_image_after_processing = blue_image_processor(data).len();
    assert_eq!(array_size_of_image_after_processing, 7635)
}

#[test]
fn grayscale_image_processor_test() {
    let mut img = open_image("www/resources/git lgo.png").expect("File should open");
    let data = img.get_bytes();
    let array_size_of_image_after_processing = grayscale_image_processor(data).len();
    assert_eq!(array_size_of_image_after_processing, 7625)
}


#[test]
fn flip_horizontal_image_processor_test() {
    let mut img = open_image("www/resources/git lgo.png").expect("File should open");
    let data = img.get_bytes();
    let array_size_of_image_after_processing = flip_horizontal_image_processor(data).len();
    assert_eq!(array_size_of_image_after_processing, 7618)
}

#[test]
fn flip_vertical_image_processor_test() {
    let mut img = open_image("www/resources/git lgo.png").expect("File should open");
    let data = img.get_bytes();
    let array_size_of_image_after_processing = flip_vertical_image_processor(data).len();
    assert_eq!(array_size_of_image_after_processing, 7600)
}

#[test]
fn blur_image_processor_test() {
    let mut img = open_image("www/resources/git lgo.png").expect("File should open");
    let data = img.get_bytes();
    let array_size_of_image_after_processing = blur_image_processor(data).len();
    assert_eq!(array_size_of_image_after_processing, 12264)
}

#[test]
fn increase_brightness_image_processor_test() {
    let mut img = open_image("www/resources/git lgo.png").expect("File should open");
    let data = img.get_bytes();
    let array_size_of_image_after_processing = inc_brightness_image_processor(data).len();
    assert_eq!(array_size_of_image_after_processing, 7633)
}
}