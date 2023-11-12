-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2023 at 08:45 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iti_tourist`
--

-- --------------------------------------------------------

--
-- Table structure for table `custom_notifications`
--

CREATE TABLE `custom_notifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `notifiable_type` varchar(191) NOT NULL,
  `notifiable_id` bigint(20) UNSIGNED NOT NULL,
  `message` text NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `read` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `destinations`
--

CREATE TABLE `destinations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `rating` varchar(191) NOT NULL,
  `creator_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `destinations`
--

INSERT INTO `destinations` (`id`, `name`, `description`, `thumbnail`, `rating`, `creator_id`, `created_at`, `updated_at`) VALUES
(1, 'Sharm El Sheikh', 'Diverse marine life and hundreds of Red Sea coral reef sites make Sharm El Sheikh a magnet for divers and eco-tourists. The tourist economy of this Sinai Peninsula city has grown quite rapidly over the last few decades, resulting in an upcrop of first-class resorts and posh nightlife. The waters of Ras Mohamed National Park are abundant with schools of fish and, oddly, toilets – thanks to the bathroom fixtures being transported by a cargo ship that sank during a 1981 storm', '1699815523_ras-mohammed-park.jpg', '4', 2, '2023-11-12 16:58:42', '2023-11-12 17:10:00'),
(2, 'Hurghada', 'Stunning coral reefs and turquoise waters perfect for windsurfing have made Hurghada, on Egypt\'s Red Sea Coast, a busy resort town. Within easy reach of the stunning Giftun Islands and the Eastern Arabian Desert, Hurghada has seen enormous amounts of development in the past decade—and yes, it does seem overrun with tourists at times. But it’s a relatively easy beach escape for Europeans, and some of the world\'s best diving and snorkeling sites are just offshore. Walk or catch a cab to explore the old quarter, El Dahar.', '1699815741_giftun-islands-red-sea.jpg', '3', 2, '2023-11-12 17:02:21', '2023-11-12 17:11:41'),
(3, 'Cairo', 'Cairo’s an ancient city that also happens to be a modern metropolis—it’s one of the biggest cities in the Middle East and has the traffic and noise issues to prove it. But as long as you’re not looking for solitude, Cairo—the City of the Thousand Minarets—is a splendid place to explore Egyptian history and culture. (Editor\'s note: Our list was compiled before political unrest prompted many countries to issue travel warnings for Egypt. If you\'re currently planning a trip to Egypt, please consider the risks and monitor your government\'s travel alerts.', '1699815800_cairo.jpg', '3', 2, '2023-11-12 17:03:20', '2023-11-12 17:12:06'),
(4, 'Ain Sukhna', 'El Ain El Sokhna is one of the most beautiful destinations to visit while in Egypt. This coastal village has been developed as a beach getaway for Cairo, accessible by a trip of less than two hours from the city. To cruise passengers, El Ain El Sukhna provides easy access to all of the sights of Cairo from the Giza Pyramids and Egyptian Museum to the Islamic Cairo', '1699816074_ain-sukhna.jpg', '2', 2, '2023-11-12 17:07:54', '2023-11-12 17:07:54'),
(5, 'Mersa Matruh', 'Mersa Matruh is protected by a ring of natural rocks some seven kilometres long which acts as a breakwater; the sea, therefore, as well as being spectacular due to its intense turquoise colour, is always calm. Many of the beaches have evocative names: Cleopatra beach, in honour of the beautiful queen who loved to bathe in this sea.', '1699816396_beach-area.jpg', '2', 2, '2023-11-12 17:13:16', '2023-11-12 17:13:16'),
(6, 'Alexandria', 'The Pearl of the Mediterranean has an ambiance more in keeping with its neighbors to the north than with those in the Middle East. Site of Pharos lighthouse, one of the Wonders of the World, and of Anthony and Cleopatra’s tempestuous romance, the city was founded by Alexander the Great in 331 BCE. Today, Alexandria offers fascinating insights into its proud Greek past, as well as interesting mosques, the casino strip of the Corniche, some lovely gardens and both modern and traditional hotels. (Editor\'s note: Our list was compiled before political unrest prompted many countries to issue travel warnings for Egypt. If you\'re currently planning a trip to Egypt, please consider the risks and monitor your government\'s travel alerts.', '1699816628_alexandria.jpg', '5', 2, '2023-11-12 17:17:08', '2023-11-12 17:17:08'),
(7, 'Marsa Alam', 'Thanks to the addition of an international airport in 2001, Marsa Alam is fast becoming a premium tourist destination, especially for scuba divers. The waters here are brimming with marine life and pristine dive sites. Landlubbers, don’t miss the Emerald Mines and the Temple of Seti I at Khanais.', '1699816701_bigphotoformarsa-alam.jpg', '3', 2, '2023-11-12 17:18:21', '2023-11-12 17:18:21'),
(8, 'El Alamein', 'The Battle of El Alamein was the largest conflict to take place in Africa during World War II and a significant turning point in the war. Before General Bernard Montgomery and the British 8th Army defeated Field Marshall Erwin Rommel and his German tank divisions, the Allies had not experienced a significant success on any front during the war. Montgomery’s army stopped the German advance toward Alexandria and Cairo, ensuring the safety of Egypt. The battle signaled the beginning of the end of Germany’s campaign in North Africa, guaranteeing the Allies control of the Suez Canal and the Middle East’s oil fields and significantly shifting the momentum of the war in favor of the Allies.', '1699816743_the-marina--v9514476.jpg', '2', 2, '2023-11-12 17:19:03', '2023-11-12 17:19:03'),
(9, 'Dahab', 'This former Bedouin fishing village is now a popular tourist destination—especially for serious windsurfers,who\'ll find some of the best conditions in the world off Dahab\'s beaches. Long known as a laid-back,backpacker-friendly town, Dahab is becoming more developed, yet retains a casual vibe. Finally,Dahab is also home to the Blue Hole, the world\'s most dangerous dive site.', '1699816780_a-view-from-the-mountain.jpg', '4', 2, '2023-11-12 17:19:40', '2023-11-12 17:19:40'),
(10, 'Luxor', 'At the height of the Ancient Egyptian New Kingdom (1549—1069 BC) its capital, Thebes (Luxor), was a city of over a million people. The pharaohs that ruled over this kingdom were made wealthy by military successes that expanded their influence south into Nubia, west along the Mediterranean, and east into modern-day Syria', '1699816823_b145de4d72cd7da8b329e85ddcb33a10.jpg', '5', 2, '2023-11-12 17:20:23', '2023-11-12 17:20:23'),
(11, 'Aswan', 'Aswan provides a much more relaxed experience. It is the smallest of Egypt’s major touristic cities, but it also bears the distinctive mark of the more relaxed Nubian culture. Those interested in Pharaonic history cannot pass up Aswan because of the impressive Philae Temple nearby, located on an island behind the old Aswan Dam, and the famous Abu Simbel Temples several hours south along the banks of Lake Nasser.', '1699816998_download.jpg', '5', 2, '2023-11-12 17:23:18', '2023-11-12 17:23:18');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `street` varchar(191) NOT NULL,
  `government` varchar(191) NOT NULL,
  `thumbnail` varchar(191) NOT NULL,
  `rating` varchar(191) DEFAULT NULL,
  `cost` varchar(191) NOT NULL,
  `discount` varchar(191) DEFAULT NULL,
  `available` tinyint(1) NOT NULL DEFAULT 1,
  `creator_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `imageable_id` int(10) UNSIGNED NOT NULL,
  `imageable_type` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `image`, `imageable_id`, `imageable_type`, `created_at`, `updated_at`) VALUES
(1, '1699815523_dolphina-park.jpg', 1, 'Destination', '2023-11-12 16:58:43', '2023-11-12 16:58:43'),
(2, '1699815523_sharm-el-sheikh.jpg', 1, 'Destination', '2023-11-12 16:58:43', '2023-11-12 16:58:43'),
(3, '1699815523_tiran.jpg', 1, 'Destination', '2023-11-12 16:58:43', '2023-11-12 16:58:43'),
(4, '1699815741_interno-ed-esterno.jpg', 2, 'Destination', '2023-11-12 17:02:21', '2023-11-12 17:02:21'),
(5, '1699815741_makadi-water-world.jpg', 2, 'Destination', '2023-11-12 17:02:21', '2023-11-12 17:02:21'),
(6, '1699815741_new-marina.jpg', 2, 'Destination', '2023-11-12 17:02:21', '2023-11-12 17:02:21'),
(7, '1699815801_photo0jpg.jpg', 3, 'Destination', '2023-11-12 17:03:21', '2023-11-12 17:03:21'),
(8, '1699815801_view-on-the-islamic-cairo.jpg', 3, 'Destination', '2023-11-12 17:03:21', '2023-11-12 17:03:21'),
(9, '1699815801_wadi-el-rayn.jpg', 3, 'Destination', '2023-11-12 17:03:21', '2023-11-12 17:03:21'),
(10, '1699816074_cancun-visit-august-2015.jpg', 4, 'Destination', '2023-11-12 17:07:54', '2023-11-12 17:07:54'),
(11, '1699816074_img-20181028-115828-largejpg.jpg', 4, 'Destination', '2023-11-12 17:07:54', '2023-11-12 17:07:54'),
(12, '1699816074_porto-sokhna-beach-resort.jpg', 4, 'Destination', '2023-11-12 17:07:54', '2023-11-12 17:07:54'),
(13, '1699816396_ageeba-beach.jpg', 5, 'Destination', '2023-11-12 17:13:16', '2023-11-12 17:13:16'),
(14, '1699816397_dsc-0229-largejpg.jpg', 5, 'Destination', '2023-11-12 17:13:17', '2023-11-12 17:13:17'),
(15, '1699816397_photo1jpg.jpg', 5, 'Destination', '2023-11-12 17:13:17', '2023-11-12 17:13:17'),
(16, '1699816628_an-outside-entrance-to.jpg', 6, 'Destination', '2023-11-12 17:17:08', '2023-11-12 17:17:08'),
(17, '1699816628_pompey-s-pillar-and-sphinx.jpg', 6, 'Destination', '2023-11-12 17:17:08', '2023-11-12 17:17:08'),
(18, '1699816629_view-from-the-hotel-of.jpg', 6, 'Destination', '2023-11-12 17:17:09', '2023-11-12 17:17:09'),
(19, '1699816701_marsa-alam.jpg', 7, 'Destination', '2023-11-12 17:18:21', '2023-11-12 17:18:21'),
(20, '1699816702_sataya.jpg', 7, 'Destination', '2023-11-12 17:18:22', '2023-11-12 17:18:22'),
(21, '1699816702_sataya-dei-delfini.jpg', 7, 'Destination', '2023-11-12 17:18:22', '2023-11-12 17:18:22'),
(22, '1699816743_el-alamein.jpg', 8, 'Destination', '2023-11-12 17:19:03', '2023-11-12 17:19:03'),
(23, '1699816743_etap-resort.jpg', 8, 'Destination', '2023-11-12 17:19:03', '2023-11-12 17:19:03'),
(24, '1699816743_porto-marina-resort-spa.jpg', 8, 'Destination', '2023-11-12 17:19:03', '2023-11-12 17:19:03'),
(25, '1699816780_caption.jpg', 9, 'Destination', '2023-11-12 17:19:40', '2023-11-12 17:19:40'),
(26, '1699816780_dahab.jpg', 9, 'Destination', '2023-11-12 17:19:40', '2023-11-12 17:19:40'),
(27, '1699816781_the-famous-blue-hole_rotated_90.jpg', 9, 'Destination', '2023-11-12 17:19:41', '2023-11-12 17:19:41'),
(28, '1699816824_c6262dfcddaf7c465a831411d9effd03.jpg', 10, 'Destination', '2023-11-12 17:20:24', '2023-11-12 17:20:24'),
(29, '1699816824_f0f7b84d7f11337a98325b23e5307aea.jpg', 10, 'Destination', '2023-11-12 17:20:25', '2023-11-12 17:20:25'),
(30, '1699816825_f0260b474d24d165223557affcdfc302.jpg', 10, 'Destination', '2023-11-12 17:20:25', '2023-11-12 17:20:25'),
(31, '1699816998_3b2dcf5f4f76f7d462e7d8f4ba6b99a2.jpg', 11, 'Destination', '2023-11-12 17:23:18', '2023-11-12 17:23:18'),
(32, '1699816998_da60c4e01554a3306a7b9b01cdce259d.jpg', 11, 'Destination', '2023-11-12 17:23:18', '2023-11-12 17:23:18'),
(33, '1699816998_f20135dd159bf4f54efa2f814e5254b4.jpg', 11, 'Destination', '2023-11-12 17:23:18', '2023-11-12 17:23:18'),
(34, '1699817912_2019-04-22.jpg', 1, 'Restaurant', '2023-11-12 17:38:32', '2023-11-12 17:38:32'),
(35, '1699817912_images.jpg', 1, 'Restaurant', '2023-11-12 17:38:32', '2023-11-12 17:38:32'),
(36, '1699817912_ML7_8865.JPG', 1, 'Restaurant', '2023-11-12 17:38:32', '2023-11-12 17:38:32'),
(37, '1699817977_106_507077348.jpg', 2, 'Restaurant', '2023-11-12 17:39:37', '2023-11-12 17:39:37'),
(38, '1699817978_18486414_1357322671018649_5197753448517419126_n.0.0.jpg', 2, 'Restaurant', '2023-11-12 17:39:38', '2023-11-12 17:39:38'),
(39, '1699817978_el-kababgy-luxor.jpg', 2, 'Restaurant', '2023-11-12 17:39:38', '2023-11-12 17:39:38'),
(40, '1699818038_finest-foods-in-sharm.jpg', 3, 'Restaurant', '2023-11-12 17:40:38', '2023-11-12 17:40:38'),
(41, '1699818038_rangoli.jpg', 3, 'Restaurant', '2023-11-12 17:40:38', '2023-11-12 17:40:38'),
(42, '1699818038_vista-da-varanda.jpg', 3, 'Restaurant', '2023-11-12 17:40:38', '2023-11-12 17:40:38'),
(43, '1699818122_image0-3.webp', 4, 'Restaurant', '2023-11-12 17:42:02', '2023-11-12 17:42:02'),
(44, '1699818122_Lazib-inn-fayoum-egypt-Hotel-Restaurant-Restaurant-terrace-1-1024x682-1-e1559694070314.jpg', 4, 'Restaurant', '2023-11-12 17:42:02', '2023-11-12 17:42:02'),
(45, '1699818123_we-highly-recommend-ibis.jpg', 4, 'Restaurant', '2023-11-12 17:42:03', '2023-11-12 17:42:03'),
(46, '1699818197_5eff48_30669344f0d54ad7a2342ecbabff00a1~mv2.webp', 5, 'Restaurant', '2023-11-12 17:43:17', '2023-11-12 17:43:17'),
(47, '1699818197_165528920_496476684713239_3224182009222267644_n-f02f3358-22ee-4723-b39a-13d74e0b8fb8-13897dc6-157f-4ec4-9d83-1990f9dadea5.jpg', 5, 'Restaurant', '2023-11-12 17:43:17', '2023-11-12 17:43:17'),
(48, '1699818197_IMG_8262-1024x670.jpg', 5, 'Restaurant', '2023-11-12 17:43:17', '2023-11-12 17:43:17'),
(49, '1699818265_701838ab-f2c9-4666-a5a7-d21801cf8205.jpg', 6, 'Restaurant', '2023-11-12 17:44:25', '2023-11-12 17:44:25'),
(50, '1699818265_Florence-Hotel-Assiut-Exterior.jpg', 6, 'Restaurant', '2023-11-12 17:44:25', '2023-11-12 17:44:25'),
(51, '1699818265_restaurant-in-ms-florence.jpg', 6, 'Restaurant', '2023-11-12 17:44:25', '2023-11-12 17:44:25');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0000_00_00_000000_create_websockets_statistics_entries_table', 1),
(2, '2014_10_12_000000_create_users_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2023_10_20_072650_create_destinations_table', 1),
(7, '2023_10_20_073235_create_trips_table', 1),
(8, '2023_10_20_074004_create_restaurants_table', 1),
(9, '2023_10_20_074249_create_user_restaurants_table', 1),
(10, '2023_10_20_074617_create_hotels_table', 1),
(11, '2023_10_20_074909_create_rooms_table', 1),
(12, '2023_10_20_075045_create_reviews_table', 1),
(13, '2023_10_21_061221_create_transactions_table', 1),
(14, '2023_10_29_204113_create_user_orders_table', 1),
(15, '2023_10_30_160632_create_time_slot_table', 1),
(16, '2023_10_30_213504_create_custom_notifications_table', 1),
(17, '2023_11_01_195524_create_images_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `email` varchar(191) NOT NULL,
  `street` varchar(191) NOT NULL,
  `government` varchar(191) NOT NULL,
  `phone` varchar(191) NOT NULL,
  `thumbnail` varchar(191) NOT NULL,
  `rating` varchar(191) DEFAULT NULL,
  `cost` varchar(191) NOT NULL,
  `discount` varchar(191) DEFAULT NULL,
  `available` tinyint(1) NOT NULL DEFAULT 1,
  `creator_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `description`, `email`, `street`, `government`, `phone`, `thumbnail`, `rating`, `cost`, `discount`, `available`, `creator_id`, `created_at`, `updated_at`) VALUES
(1, 'bab elhara', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta esse quo, aliquam quaerat autem provident eveniet? Nihil, enim accusantium?', 'redseadivers@example.com', '8 Dive Center Road', 'beni suef', '+20 333 222 111', '1699817911_2019-04-22.jpg', '4', '1000', '10', 1, 2, '2023-11-12 17:38:31', '2023-11-12 17:38:31'),
(2, 'el-kababgy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta esse quo, aliquam quaerat autem provident eveniet? Nihil, enim accusantium?', 'nilecruise@example.com', '7 Nile Cruise Avenue', 'Luxor', '+20 333 222 111', '1699817977_106_507077348.jpg', '2', '1500', '10', 1, 2, '2023-11-12 17:39:37', '2023-11-12 17:39:37'),
(3, 'Rangoli Paradise', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta esse quo, aliquam quaerat autem provident eveniet? Nihil, enim accusantium?', 'redseaparadise@example.com', '12 Paradise Road', 'Sharm El Sheikh', '+20 333 222 111', '1699818037_finest-foods-in-sharm.jpg', '2', '2222', '20', 1, 2, '2023-11-12 17:40:37', '2023-11-12 17:40:37'),
(4, 'Fayoum Fisherman\'s Grill', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta esse quo, aliquam quaerat autem provident eveniet? Nihil, enim accusantium?', 'fayoumfisherman@example.com', '20 Fayoum Beach Road', 'Fayoum', '+20 333 222 111', '1699818122_image0-3.webp', '4', '1222', '30', 1, 2, '2023-11-12 17:42:02', '2023-11-12 17:42:02'),
(5, 'Pyramid View Restaurant', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta esse quo, aliquam quaerat autem provident eveniet? Nihil, enim accusantium?', 'pyramidview@example.com', '2 Giza Pyramid Road', 'Giza', '+20 333 222 111', '1699818197_5eff48_30669344f0d54ad7a2342ecbabff00a1~mv2.webp', '4', '6666', '40', 1, 2, '2023-11-12 17:43:17', '2023-11-12 17:43:17'),
(6, 'Nile Felucca Cafe', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta esse quo, aliquam quaerat autem provident eveniet? Nihil, enim accusantium?', 'feluccacafe@example.com', '10 Felucca Street', 'Asyut', '+20 333 222 111', '1699818265_701838ab-f2c9-4666-a5a7-d21801cf8205.jpg', '3', '4568', '20', 1, 2, '2023-11-12 17:44:25', '2023-11-12 17:44:25');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `review` text NOT NULL,
  `reviewable_type` varchar(191) NOT NULL,
  `reviewable_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` enum('single','double') NOT NULL DEFAULT 'single',
  `thumbnail` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `hotel_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `time_slot`
--

CREATE TABLE `time_slot` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `service_id` bigint(20) UNSIGNED NOT NULL,
  `service_type` varchar(191) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `available_slots` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoiceid` varchar(255) NOT NULL,
  `paymentid` varchar(255) NOT NULL,
  `creator_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trips`
--

CREATE TABLE `trips` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `government` varchar(191) NOT NULL,
  `duration` varchar(191) NOT NULL,
  `cost` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `rating` varchar(191) NOT NULL,
  `thumbnail` varchar(191) NOT NULL,
  `available` tinyint(1) NOT NULL DEFAULT 1,
  `discount` varchar(191) DEFAULT NULL,
  `creator_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `government` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `role` enum('user','vendor','admin') NOT NULL DEFAULT 'user',
  `github_id` varchar(191) DEFAULT NULL,
  `github_token` varchar(191) DEFAULT NULL,
  `github_refresh_token` varchar(191) DEFAULT NULL,
  `google_id` varchar(191) DEFAULT NULL,
  `google_token` varchar(191) DEFAULT NULL,
  `google_refresh_token` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `government`, `street`, `mobile`, `role`, `github_id`, `github_token`, `github_refresh_token`, `google_id`, `google_token`, `google_refresh_token`, `created_at`, `updated_at`) VALUES
(1, 'abdelrahman ahmed', 'abdelrahman@gmail.com', NULL, '$2y$10$nEUTwoRKT7c7bwseNfvmDesVQ9aj3KrR/LE5dT7./uTyWoMnrrIpa', NULL, 'Cairo', 'giza', '12345678911', 'admin', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'mohamed ahmed', 'mohamed@gmail.com', NULL, '$2y$10$nEUTwoRKT7c7bwseNfvmDesVQ9aj3KrR/LE5dT7./uTyWoMnrrIpa', NULL, 'Cairo', 'giza', '12345678911', 'vendor', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_orders`
--

CREATE TABLE `user_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `service_id` bigint(20) UNSIGNED NOT NULL,
  `service_type` enum('Trip','Restaurant','Hotel','Destination') NOT NULL,
  `quantity` varchar(191) NOT NULL,
  `amount` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_restaurants`
--

CREATE TABLE `user_restaurants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `restaurant_id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `websockets_statistics_entries`
--

CREATE TABLE `websockets_statistics_entries` (
  `id` int(10) UNSIGNED NOT NULL,
  `app_id` varchar(191) NOT NULL,
  `peak_connection_count` int(11) NOT NULL,
  `websocket_message_count` int(11) NOT NULL,
  `api_message_count` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `custom_notifications`
--
ALTER TABLE `custom_notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `custom_notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`),
  ADD KEY `custom_notifications_user_id_foreign` (`user_id`);

--
-- Indexes for table `destinations`
--
ALTER TABLE `destinations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `destinations_creator_id_foreign` (`creator_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotels_creator_id_foreign` (`creator_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `restaurants_creator_id_foreign` (`creator_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_reviewable_type_reviewable_id_index` (`reviewable_type`,`reviewable_id`),
  ADD KEY `reviews_user_id_foreign` (`user_id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rooms_hotel_id_foreign` (`hotel_id`);

--
-- Indexes for table `time_slot`
--
ALTER TABLE `time_slot`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_creator_id_foreign` (`creator_id`),
  ADD KEY `transactions_user_id_foreign` (`user_id`);

--
-- Indexes for table `trips`
--
ALTER TABLE `trips`
  ADD PRIMARY KEY (`id`),
  ADD KEY `trips_creator_id_foreign` (`creator_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_orders`
--
ALTER TABLE `user_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_orders_user_id_foreign` (`user_id`),
  ADD KEY `user_orders_service_id_service_type_index` (`service_id`,`service_type`);

--
-- Indexes for table `user_restaurants`
--
ALTER TABLE `user_restaurants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_restaurants_user_id_foreign` (`user_id`),
  ADD KEY `user_restaurants_restaurant_id_foreign` (`restaurant_id`);

--
-- Indexes for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `custom_notifications`
--
ALTER TABLE `custom_notifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `destinations`
--
ALTER TABLE `destinations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `time_slot`
--
ALTER TABLE `time_slot`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trips`
--
ALTER TABLE `trips`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_orders`
--
ALTER TABLE `user_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_restaurants`
--
ALTER TABLE `user_restaurants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `custom_notifications`
--
ALTER TABLE `custom_notifications`
  ADD CONSTRAINT `custom_notifications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `destinations`
--
ALTER TABLE `destinations`
  ADD CONSTRAINT `destinations_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hotels`
--
ALTER TABLE `hotels`
  ADD CONSTRAINT `hotels_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD CONSTRAINT `restaurants_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `rooms_hotel_id_foreign` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `trips`
--
ALTER TABLE `trips`
  ADD CONSTRAINT `trips_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_orders`
--
ALTER TABLE `user_orders`
  ADD CONSTRAINT `user_orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_restaurants`
--
ALTER TABLE `user_restaurants`
  ADD CONSTRAINT `user_restaurants_restaurant_id_foreign` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_restaurants_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
