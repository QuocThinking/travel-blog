import { NavItem, SectionId, Tour, Destination, Testimonial, Language } from './types';

export const TRANSLATIONS = {
  vn: {
    nav_home: 'Trang chủ',
    nav_featured: 'Tour nổi bật',
    nav_destinations: 'Điểm đến',
    nav_ai: 'AI Tư vấn',
    nav_testimonials: 'Đánh giá',
    nav_about: 'Về chúng tôi',
    nav_contact: 'Liên hệ',
    
    hero_title_1: 'Khám Phá Thế Giới',
    hero_title_2: 'Theo Cách Của Bạn',
    hero_subtitle: 'Chúng tôi kiến tạo những hành trình độc bản, mang đến trải nghiệm du lịch đẳng cấp và những ký ức không thể nào quên.',
    hero_cta_book: 'Đặt Tour Ngay',
    hero_cta_ai: 'Lên Kế Hoạch Với AI',

    featured_subtitle: 'Điểm Đến Hàng Đầu',
    featured_title: 'Tour Nổi Bật',
    featured_view_all: 'Xem tất cả',
    
    dest_subtitle: 'Khám Phá',
    dest_title: 'Điểm Đến Ưa Thích',
    dest_filter_all: 'Tất cả',
    dest_filter_asia: 'Châu Á',
    dest_filter_europe: 'Châu Âu',
    dest_filter_americas: 'Châu Mỹ',
    
    ai_title: 'Trợ Lý Du Lịch AI',
    ai_desc: 'Bạn chưa biết đi đâu? Hãy hỏi AI của Voyage Adventures để nhận gợi ý lộ trình hoàn hảo cho riêng bạn.',
    ai_placeholder: 'Ví dụ: Tôi muốn đi biển miền Trung 3 ngày, thích ăn hải sản và yên tĩnh...',
    ai_btn_send: 'Gửi Yêu Cầu',
    ai_suggestion_title: 'Gợi ý từ Voyage AI:',
    ai_error: 'Đã có lỗi xảy ra khi kết nối với trợ lý AI.',
    ai_btn_honeymoon: '💕 Điểm đến trăng mật',
    ai_btn_fall: '🍂 Trekking mùa thu',
    ai_btn_family: '👨‍👩‍👧‍👦 Gia đình có trẻ nhỏ',
    
    about_subtitle: 'Về Chúng Tôi',
    about_title: 'Hành Trình Của Đam Mê & Sự Tận Tâm',
    about_desc_1: 'Tại Voyage Adventures, chúng tôi không chỉ bán các chuyến đi, chúng tôi kiến tạo những ký ức. Được thành lập từ niềm đam mê khám phá vô tận.',
    about_desc_2: 'Đội ngũ hướng dẫn viên bản địa giàu kinh nghiệm của chúng tôi sẽ đưa bạn đến những vùng đất mới lạ.',
    about_cta: 'Liên Hệ Tư Vấn',
    
    contact_subtitle: 'Liên Hệ',
    contact_title: 'Bắt Đầu Hành Trình Của Bạn',
    contact_info_title: 'Thông Tin Liên Hệ',
    contact_info_desc: 'Hãy để lại thông tin, đội ngũ chuyên viên của Voyage Adventures sẽ liên hệ tư vấn miễn phí trong vòng 24h.',
    form_name: 'Họ và Tên',
    form_phone: 'Số Điện Thoại',
    form_email: 'Email',
    form_tour: 'Tour / Dịch vụ quan tâm',
    form_select_tour_placeholder: 'Chọn tour hoặc để trống (Tư vấn chung)',
    form_message: 'Lời Nhắn / Yêu Cầu',
    form_btn: 'Gửi Yêu Cầu',
    form_btn_submitting: 'Đang Gửi...',
    form_success_title: 'Gửi yêu cầu thành công!',
    form_success_desc: 'Cảm ơn bạn đã liên hệ. Đội ngũ Voyage Adventures sẽ phản hồi sớm nhất.',
    form_error: 'Có lỗi xảy ra. Vui lòng thử lại sau.',
    
    footer_desc: 'Khám phá vẻ đẹp tiềm ẩn của thế giới cùng Voyage Adventures. Uy tín, chất lượng và tận tâm trong từng hành trình.',
    footer_quick_links: 'Liên Kết Nhanh',
    footer_support: 'Hỗ Trợ',
    footer_faq: 'Câu hỏi thường gặp',
    footer_privacy: 'Chính sách bảo mật',
    footer_terms: 'Điều khoản sử dụng',
    footer_newsletter: 'Đăng Ký Nhận Tin',
    footer_newsletter_desc: 'Nhận ưu đãi độc quyền qua email.',
    footer_email_placeholder: 'Email của bạn',
    footer_send: 'Gửi',
    
    testimonials_subtitle: 'Cảm Nhận Khách Hàng',
    testimonials_title: 'Những Chuyến Đi Đáng Nhớ'
  },
  en: {
    nav_home: 'Home',
    nav_featured: 'Featured Tours',
    nav_destinations: 'Destinations',
    nav_ai: 'AI Planner',
    nav_testimonials: 'Reviews',
    nav_about: 'About Us',
    nav_contact: 'Contact',
    
    hero_title_1: 'Discover The World',
    hero_title_2: 'Your Unique Way',
    hero_subtitle: 'We craft unique journeys, delivering premium travel experiences and unforgettable memories.',
    hero_cta_book: 'Book Now',
    hero_cta_ai: 'Plan with AI',

    featured_subtitle: 'Top Destinations',
    featured_title: 'Featured Tours',
    featured_view_all: 'View All',
    
    dest_subtitle: 'Explore',
    dest_title: 'Popular Destinations',
    dest_filter_all: 'All',
    dest_filter_asia: 'Asia',
    dest_filter_europe: 'Europe',
    dest_filter_americas: 'Americas',
    
    ai_title: 'AI Travel Assistant',
    ai_desc: 'Don\'t know where to go? Ask Voyage Adventures AI for the perfect itinerary suggestion for you.',
    ai_placeholder: 'Ex: I want a 3-day beach trip in Central Vietnam, love seafood and quiet places...',
    ai_btn_send: 'Send Request',
    ai_suggestion_title: 'Suggestion from Voyage AI:',
    ai_error: 'An error occurred while connecting to the AI assistant.',
    ai_btn_honeymoon: '💕 Honeymoon spots',
    ai_btn_fall: '🍂 Autumn Trekking',
    ai_btn_family: '👨‍👩‍👧‍👦 Family with kids',
    
    about_subtitle: 'About Us',
    about_title: 'A Journey of Passion & Dedication',
    about_desc_1: 'At Voyage Adventures, we don\'t just sell trips, we craft memories. Founded on an endless passion for exploration.',
    about_desc_2: 'Our experienced local guides will take you to new lands, to taste unique local cuisines and immerse in culture.',
    about_cta: 'Contact for Advice',
    
    contact_subtitle: 'Contact',
    contact_title: 'Start Your Journey',
    contact_info_title: 'Contact Information',
    contact_info_desc: 'Leave your details, and the Voyage Adventures team will contact you for free consultation within 24h.',
    form_name: 'Full Name',
    form_phone: 'Phone Number',
    form_email: 'Email',
    form_tour: 'Interested Tour / Service',
    form_select_tour_placeholder: 'Select a tour or leave blank (General Inquiry)',
    form_message: 'Message / Request',
    form_btn: 'Send Request',
    form_btn_submitting: 'Sending...',
    form_success_title: 'Request Sent Successfully!',
    form_success_desc: 'Thank you for contacting us. The Voyage Adventures team will respond shortly.',
    form_error: 'An error occurred. Please try again later.',
    
    footer_desc: 'Discover the hidden beauty of the world with Voyage Adventures. Prestige, quality, and dedication in every journey.',
    footer_quick_links: 'Quick Links',
    footer_support: 'Support',
    footer_faq: 'FAQs',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Use',
    footer_newsletter: 'Newsletter',
    footer_newsletter_desc: 'Get exclusive offers via email.',
    footer_email_placeholder: 'Your email',
    footer_send: 'Send',
    
    testimonials_subtitle: 'Testimonials',
    testimonials_title: 'Unforgettable Journeys'
  }
};

export const getNavItems = (lang: Language): NavItem[] => {
  const t = TRANSLATIONS[lang];
  return [
    { label: t.nav_home, href: `#${SectionId.HERO}` },
    { label: t.nav_featured, href: `#${SectionId.FEATURED}` },
    { label: t.nav_destinations, href: `#${SectionId.DESTINATIONS}` },
    { label: t.nav_ai, href: `#${SectionId.AI_PLANNER}` },
    { label: t.nav_testimonials, href: `#${SectionId.TESTIMONIALS}` },
    { label: t.nav_about, href: `#${SectionId.ABOUT}` },
    { label: t.nav_contact, href: `#${SectionId.CONTACT}` },
  ];
};

export const getFeaturedTours = (lang: Language): Tour[] => [
  {
    id: '1',
    title: lang === 'vn' ? 'Hạ Long Huyền Bí' : 'Mystical Ha Long',
    image: 'https://picsum.photos/id/10/800/600',
    price: lang === 'vn' ? '3.500.000 VNĐ' : '$150 USD',
    duration: lang === 'vn' ? '2 Ngày 1 Đêm' : '2 Days 1 Night',
    rating: 4.8,
    location: lang === 'vn' ? 'Quảng Ninh, Việt Nam' : 'Quang Ninh, Vietnam',
    description: lang === 'vn' ? 'Trải nghiệm du thuyền 5 sao khám phá vịnh Hạ Long kỳ vĩ.' : 'Experience a 5-star cruise exploring the magnificent Ha Long Bay.',
  },
  {
    id: '2',
    title: lang === 'vn' ? 'Sapa Mùa Lúa Chín' : 'Golden Season Sapa',
    image: 'https://picsum.photos/id/29/800/600',
    price: lang === 'vn' ? '4.200.000 VNĐ' : '$180 USD',
    duration: lang === 'vn' ? '3 Ngày 2 Đêm' : '3 Days 2 Nights',
    rating: 4.9,
    location: lang === 'vn' ? 'Lào Cai, Việt Nam' : 'Lao Cai, Vietnam',
    description: lang === 'vn' ? 'Trekking qua những bản làng mờ sương và ruộng bậc thang vàng óng.' : 'Trekking through misty villages and golden terraced rice fields.',
  },
  {
    id: '3',
    title: lang === 'vn' ? 'Đà Nẵng - Hội An' : 'Da Nang - Hoi An',
    image: 'https://picsum.photos/id/48/800/600',
    price: lang === 'vn' ? '5.100.000 VNĐ' : '$220 USD',
    duration: lang === 'vn' ? '4 Ngày 3 Đêm' : '4 Days 3 Nights',
    rating: 4.7,
    location: lang === 'vn' ? 'Miền Trung, Việt Nam' : 'Central Vietnam',
    description: lang === 'vn' ? 'Kết hợp hoàn hảo giữa thành phố hiện đại và phố cổ hoài niệm.' : 'A perfect blend of modern city life and nostalgic ancient town vibes.',
  },
];

export const getDestinations = (lang: Language): Destination[] => [
  { id: 'd1', name: lang === 'vn' ? 'Nhật Bản' : 'Japan', count: 12, image: 'https://picsum.photos/id/57/400/500', category: 'asia' },
  { id: 'd2', name: lang === 'vn' ? 'Hàn Quốc' : 'South Korea', count: 8, image: 'https://picsum.photos/id/58/400/500', category: 'asia' },
  { id: 'd3', name: lang === 'vn' ? 'Thái Lan' : 'Thailand', count: 15, image: 'https://picsum.photos/id/59/400/500', category: 'asia' },
  { id: 'd4', name: lang === 'vn' ? 'Pháp' : 'France', count: 5, image: 'https://picsum.photos/id/60/400/500', category: 'europe' },
  { id: 'd5', name: lang === 'vn' ? 'Mỹ' : 'USA', count: 7, image: 'https://picsum.photos/id/61/400/500', category: 'americas' },
  { id: 'd6', name: lang === 'vn' ? 'Ý' : 'Italy', count: 6, image: 'https://picsum.photos/id/62/400/500', category: 'europe' },
  { id: 'd7', name: lang === 'vn' ? 'Singapore' : 'Singapore', count: 9, image: 'https://picsum.photos/id/64/400/500', category: 'asia' },
  { id: 'd8', name: lang === 'vn' ? 'Thụy Sĩ' : 'Switzerland', count: 4, image: 'https://picsum.photos/id/65/400/500', category: 'europe' },
];

export const getTestimonials = (lang: Language): Testimonial[] => [
  {
    id: 't1',
    name: 'Nguyen Thi Mai',
    role: lang === 'vn' ? 'Doanh Nhân' : 'Entrepreneur',
    content: lang === 'vn' ? 'Chuyến đi tuyệt vời nhất tôi từng trải nghiệm. Dịch vụ chuyên nghiệp, hướng dẫn viên tận tâm.' : 'The best trip I have ever experienced. Professional service, dedicated tour guide.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    rating: 5
  },
  {
    id: 't2',
    name: 'John Smith',
    role: lang === 'vn' ? 'Nhiếp Ảnh Gia' : 'Photographer',
    content: lang === 'vn' ? 'Voyage Adventures đã giúp tôi khám phá những góc máy đẹp nhất tại Việt Nam. Rất đáng tiền!' : 'Voyage Adventures helped me discover the most beautiful angles in Vietnam. Well worth the money!',
    avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    rating: 5
  },
  {
    id: 't3',
    name: 'Tran Van Hung',
    role: lang === 'vn' ? 'Travel Blogger' : 'Travel Blogger',
    content: lang === 'vn' ? 'Lịch trình được thiết kế rất hợp lý, không quá mệt nhưng vẫn đi được nhiều nơi. Sẽ quay lại!' : 'The itinerary was well designed, not too tiring but still covered many places. Will return!',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
    rating: 4
  }
];

export const CONTACT_INFO = {
  phone: '+84901234567',
  phoneDisplay: '+84 90 123 4567',
  email: 'info@voyageadventures.vn',
  address: '123 Đường Nguyễn Huệ, Quận 1, TP. HCM',
};