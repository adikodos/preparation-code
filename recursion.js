const category = [
    { name: 'tech', parent: null },
    { name: 'hot_right_now', parent: 'tech' },
    { name: 'upcomming_releases', parent: 'tech' },
    { name: 'gadgets', parent: 'tech' },
    { name: 'news', parent: null },
    { name: 'social', parent: 'startups' },
    { name: 'europe', parent: 'news' },
    { name: 'asia', parent: 'news' },
    { name: 'events', parent: 'news' },
    { name: 'startups', parent: null },
    { name: 'funding', parent: 'startups' },
    { name: 'unicorns', parent: 'startups' },
    { name: 'venture_capital', parent: 'funding' },
    { name: 'crowdfunding', parent: 'funding' },
    { name: 'usa', parent: 'news' }
]

const arrangeCategories = (category, parent = null) => {
    let result = {};
    category
    .filter(cat => cat.parent === parent)
    .forEach(cat => {
        result[cat.name] = arrangeCategories(category, cat.name);
    })
    return result;
}

console.log(arrangeCategories(category, null));
