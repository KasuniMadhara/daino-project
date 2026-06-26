import { useState } from 'react'

// ── Sample memory data (we'll replace with real DB data later) ──
const MEMORIES = [
    {
        id: 1,
        title: 'Margherita night in Naples',
        location: 'Naples, Italy',
        date: 'Jun 14',
        category: 'food',
        color: '#D85A30',
        light: '#FAECE7',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
    },
    {
        id: 2,
        title: 'First sip at Blue Bottle',
        location: 'San Francisco',
        date: 'Mar 2',
        category: 'coffee',
        color: '#BA7517',
        light: '#FAEEDA',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
    },
    {
        id: 3,
        title: 'Sunset over Santorini',
        location: 'Santorini, Greece',
        date: 'Aug 21',
        category: 'places',
        color: '#1D9E75',
        light: '#E1F5EE',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&q=80',
    },
    {
        id: 4,
        title: 'Road trip through Tuscany',
        location: 'Tuscany, Italy',
        date: 'Sep 5',
        category: 'travel',
        color: '#378ADD',
        light: '#E6F1FB',
        image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&q=80',
    },
    {
        id: 5,
        title: 'Proposal at the lighthouse',
        location: 'Galle, Sri Lanka',
        date: 'Dec 24',
        category: 'love',
        color: '#D4537E',
        light: '#FBEAF0',
        image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&q=80',
    },
    {
        id: 6,
        title: 'Sunday pancakes together',
        location: 'Home',
        date: 'Jan 11',
        category: 'food',
        color: '#D85A30',
        light: '#FAECE7',
        image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&q=80',
    },
    {
        id: 7,
        title: 'Cherry blossoms in Kyoto',
        location: 'Kyoto, Japan',
        date: 'Apr 3',
        category: 'travel',
        color: '#378ADD',
        light: '#E6F1FB',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80',
    },
    {
        id: 8,
        title: 'Our first coffee date',
        location: 'Colombo, Sri Lanka',
        date: 'Feb 14',
        category: 'love',
        color: '#D4537E',
        light: '#FBEAF0',
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80',
    },
]

// ── Category filter options ──
const CATEGORIES = [
    { key: 'all', label: 'all' },
    { key: 'food', label: 'food' },
    { key: 'coffee', label: 'coffee' },
    { key: 'places', label: 'places' },
    { key: 'travel', label: 'travel' },
    { key: 'love', label: 'love' },
]

function Feed() {

    // tracks which category pill is selected
    const [active, setActive] = useState('all')

    // tracks what user types in search box
    const [search, setSearch] = useState(false)

    // filter memories by selected category
    const filtered = MEMORIES.filter(m =>
        active === 'all' ? true : m.category === active
    )

    return (
        <div style={styles.page}>

            {/* ── "On this day" banner ── */}
            <div style={styles.onThisDay}>
                <span style={styles.onThisDayIcon}>🦕</span>
                <div>
                    <p style={styles.onThisDayLabel}>on this day, 1 year ago</p>
                    <p style={styles.onThisDayTitle}>Our first coffee date · Colombo</p>
                </div>
            </div>

            {/* ── Category filter pills ── */}
            <div style={styles.pills}>
                {CATEGORIES.map(cat => (
                    <button
                        key={cat.key}
                        onClick={() => setActive(cat.key)}
                        style={active === cat.key
                            ? { ...styles.pill, ...styles.pillActive }
                            : styles.pill
                        }
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* ── Memory card grid ── */}
            <div style={styles.grid}>
                {filtered.map(memory => (
                    <div key={memory.id} style={styles.card}>

                        {/* Card top — real photo */}
                        <div style={{
                            ...styles.cardTop,
                            backgroundImage: `url(${memory.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            {/* Category badge */}
                            <span style={{
                                ...styles.badge,
                                backgroundColor: memory.color,
                            }}>
                                {memory.category}
                            </span>

                            {/* Heart button */}
                            <button style={styles.heart}>🤍</button>
                        </div>

                        {/* Card bottom — title and location */}
                        <div style={styles.cardBody}>
                            <p style={styles.cardTitle}>{memory.title}</p>
                            <p style={styles.cardLocation}>
                                📍 {memory.location} · {memory.date}
                            </p>
                        </div>

                    </div>
                ))}
            </div >

    {/* ── Empty state when no memories match filter ── */ }
{
    filtered.length === 0 && (
        <div style={styles.empty}>
            <p style={{ fontSize: '48px' }}>🦕</p>
            <p style={styles.emptyText}>no memories here yet</p>
            <p style={styles.emptyHint}>add your first {active} memory!</p>
        </div>
    )
}

        </div >
    )
}

// ── All Feed page styles ──
const styles = {

    page: {
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '32px 24px',
    },

    // "on this day" banner at top
    onThisDay: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        backgroundColor: '#FBEAF0',
        border: '1px solid #F4C0D1',
        borderRadius: '12px',
        padding: '14px 20px',
        marginBottom: '28px',
    },

    onThisDayIcon: {
        fontSize: '28px',
    },

    onThisDayLabel: {
        fontSize: '11px',
        color: '#D4537E',
        fontWeight: '500',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        margin: '0 0 2px',
    },

    onThisDayTitle: {
        fontSize: '15px',
        color: '#2C2A27',
        fontWeight: '500',
        margin: '0',
        fontFamily: 'Lora, Georgia, serif',
    },

    // filter pills row
    pills: {
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        marginBottom: '24px',
    },

    pill: {
        padding: '6px 16px',
        borderRadius: '999px',
        border: '1px solid #E8E4DC',
        backgroundColor: '#FAF8F3',
        color: '#888780',
        fontSize: '13px',
        cursor: 'pointer',
        fontFamily: 'inherit',
    },

    // active pill — filled coral
    pillActive: {
        backgroundColor: '#2C2A27',
        color: '#FAF8F3',
        border: '1px solid #2C2A27',
    },

    // responsive card grid
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '20px',
    },

    // single memory card
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #E8E4DC',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.2s',
    },

    // top coloured section of card
    cardTop: {
        height: '140px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // category badge top left
    badge: {
        position: 'absolute',
        top: '10px',
        left: '10px',
        fontSize: '10px',
        padding: '3px 10px',
        borderRadius: '999px',
        color: '#FAF8F3',
        fontWeight: '500',
        letterSpacing: '0.3px',
    },

    // big emoji in centre of card top
    cardEmoji: {
        fontSize: '40px',
    },

    // heart button top right
    heart: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        border: 'none',
        fontSize: '14px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // card text section
    cardBody: {
        padding: '12px 14px',
    },

    cardTitle: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#2C2A27',
        margin: '0 0 6px',
        fontFamily: 'Lora, Georgia, serif',
    },

    cardLocation: {
        fontSize: '12px',
        color: '#888780',
        margin: '0',
    },

    // empty state
    empty: {
        textAlign: 'center',
        padding: '60px 20px',
    },

    emptyText: {
        fontSize: '18px',
        color: '#2C2A27',
        fontWeight: '500',
        margin: '12px 0 6px',
        fontFamily: 'Lora, Georgia, serif',
    },

    emptyHint: {
        fontSize: '14px',
        color: '#888780',
        margin: '0',
    },
}

export default Feed