-- Seed sample seedlings data for Agitech Seedlings
INSERT INTO seedlings (name, category, description, price, image_url, in_stock) VALUES
-- Vegetables
('Tomato Roma', 'Vegetables', 'High-yielding determinate tomato variety, perfect for sauces and canning. Disease resistant and heat tolerant.', 15.00, 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400', true),
('Tomato Cherry', 'Vegetables', 'Sweet and prolific cherry tomatoes, ideal for salads and snacking. Produces clusters of bite-sized fruits.', 18.00, 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400', true),
('Cabbage Green', 'Vegetables', 'Traditional green cabbage with tight, compact heads. Excellent for coleslaw and cooking.', 12.00, 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400', true),
('Onion Red', 'Vegetables', 'Mild and sweet red onion variety. Great for salads and grilling. Stores well.', 10.00, 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400', true),
('Pepper Bell', 'Vegetables', 'Sweet bell pepper that matures from green to red. Thick-walled and crunchy.', 20.00, 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400', true),
('Spinach', 'Vegetables', 'Nutrient-rich leafy green, fast-growing and cold-tolerant. Perfect for continuous harvesting.', 8.00, 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400', true),
('Kale Curly', 'Vegetables', 'Superfood green with curly leaves. Highly nutritious and frost-hardy.', 12.00, 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?w=400', false),
('Carrot Nantes', 'Vegetables', 'Sweet, cylindrical carrots with smooth skin. Excellent for fresh eating and juicing.', 14.00, 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400', true),

-- Fruits
('Strawberry Chandler', 'Fruits', 'Large, sweet strawberries with excellent flavor. High-yielding and disease resistant.', 25.00, 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400', true),
('Watermelon Sugar Baby', 'Fruits', 'Compact, round watermelons perfect for small gardens. Sweet red flesh.', 30.00, 'https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400', true),
('Pawpaw Solo', 'Fruits', 'Dwarf papaya variety producing sweet, orange-fleshed fruits. Fast-growing tropical.', 35.00, 'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=400', true),
('Passion Fruit Purple', 'Fruits', 'Vigorous vine producing aromatic purple fruits. Self-pollinating variety.', 40.00, 'https://images.unsplash.com/photo-1604495772376-9657f0035eb5?w=400', true),
('Mango Tommy', 'Fruits', 'Popular mango variety with fiber-free flesh. Disease resistant and productive.', 50.00, 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400', false),
('Banana Cavendish', 'Fruits', 'Classic dessert banana, disease-resistant tissue culture plants. High yield.', 45.00, 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400', true),

-- Herbs
('Basil Sweet', 'Herbs', 'Classic Italian basil with large, aromatic leaves. Essential for pesto and cooking.', 8.00, 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400', true),
('Mint Spearmint', 'Herbs', 'Refreshing spearmint with classic mint flavor. Perfect for teas and cocktails.', 10.00, 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400', true),
('Rosemary', 'Herbs', 'Aromatic Mediterranean herb, drought-tolerant and ornamental. Great for roasting.', 15.00, 'https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=400', true),
('Coriander', 'Herbs', 'Fast-growing herb with flavorful leaves and seeds. Essential for many cuisines.', 8.00, 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=400', true),
('Lemongrass', 'Herbs', 'Tropical grass with citrus flavor. Used in Asian cooking and herbal teas.', 12.00, 'https://images.unsplash.com/photo-1595855759920-86582396756a?w=400', true),

-- Trees
('Avocado Hass', 'Trees', 'Premium avocado variety with creamy, nutty flesh. Grafted for early fruiting.', 120.00, 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400', true),
('Citrus Orange Valencia', 'Trees', 'Sweet, juicy oranges perfect for fresh eating and juicing. Grafted trees.', 100.00, 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400', true),
('Citrus Lemon Meyer', 'Trees', 'Sweeter, less acidic lemon variety. Compact growth suitable for containers.', 90.00, 'https://images.unsplash.com/photo-1590502593747-42a996133562?w=400', true),
('Moringa', 'Trees', 'Nutrient-dense superfood tree, fast-growing and drought-tolerant. Edible leaves.', 35.00, 'https://images.unsplash.com/photo-1636400584894-c26d3eb2a38c?w=400', true),
('Macadamia', 'Trees', 'Premium nut tree producing rich, buttery nuts. Long-lived and productive.', 150.00, 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=400', false),
('Coffee Arabica', 'Trees', 'High-quality coffee variety for home growing. Shade-tolerant ornamental.', 60.00, 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400', true);
