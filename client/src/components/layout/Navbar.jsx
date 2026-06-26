// React hooks we need
import { useState } from 'react'

// Link lets us navigate between pages without refreshing
import { Link, useLocation } from 'react-router-dom'

// Navbar shows at the top of every page in Daino
function Navbar() {

    // useLocation tells us which page we're currently on
    // so we can highlight the active nav link
    const location = useLocation()

    // controls whether mobile menu is open or closed
    const [menuOpen, setMenuOpen] = useState(false)

    // helper — returns true if the current URL matches this path
    const isActive = (path) => location.pathname === path

    return (
        <nav style={styles.nav}>

            {/* ── Left side: Dainosiras logo ── */}

            {/* ── Left side: Dainosiras logo ── */}
            <Link to="/" style={styles.logo}>

                {/* Teal sauropod dino SVG */}
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                    <ellipse cx="58" cy="68" rx="28" ry="20" fill="#1D9E75" />
                    <ellipse cx="58" cy="66" rx="25" ry="17" fill="#5DCAA5" />
                    <path d="M38 60 Q30 45 28 30 Q29 25 34 22 Q39 19 42 26 Q44 38 45 55" fill="#1D9E75" />
                    <path d="M40 58 Q32 44 31 30 Q32 26 36 24 Q40 22 42 28 Q44 40 46 56" fill="#5DCAA5" />
                    <ellipse cx="35" cy="20" rx="12" ry="9" fill="#1D9E75" />
                    <ellipse cx="35" cy="19" rx="10" ry="8" fill="#5DCAA5" />
                    <ellipse cx="44" cy="22" rx="6" ry="4" fill="#1D9E75" />
                    <ellipse cx="44" cy="21" rx="5" ry="3" fill="#5DCAA5" />
                    <circle cx="46" cy="20" r="1" fill="#1D9E75" />
                    <circle cx="32" cy="17" r="4" fill="white" />
                    <circle cx="32" cy="17" r="2.5" fill="#2C2A27" />
                    <circle cx="31" cy="16" r="0.8" fill="white" />
                    <ellipse cx="28" cy="22" rx="4" ry="2" fill="#9FE1CB" />
                    <path d="M40 24 Q43 27 46 24" stroke="#1D9E75" strokeWidth="1" fill="none" strokeLinecap="round" />
                    <ellipse cx="40" cy="84" rx="8" ry="6" fill="#1D9E75" />
                    <ellipse cx="55" cy="87" rx="8" ry="6" fill="#1D9E75" />
                    <ellipse cx="68" cy="86" rx="8" ry="6" fill="#1D9E75" />
                    <ellipse cx="76" cy="82" rx="7" ry="5" fill="#1D9E75" />
                    <ellipse cx="37" cy="88" rx="3" ry="2" fill="#0F6E56" />
                    <ellipse cx="41" cy="89" rx="3" ry="2" fill="#0F6E56" />
                    <ellipse cx="45" cy="89" rx="3" ry="2" fill="#0F6E56" />
                    <path d="M84 66 Q94 60 96 52 Q94 48 90 52 Q88 58 82 62" fill="#1D9E75" />
                    <path d="M50 50 L48 42 L53 50" fill="#0F6E56" />
                    <path d="M58 48 L57 40 L62 48" fill="#0F6E56" />
                    <path d="M66 50 L66 42 L70 50" fill="#0F6E56" />
                    <text x="70" y="18" fontSize="14" fill="#BA7517">✦</text>
                    <text x="8" y="30" fontSize="10" fill="#D4537E">★</text>
                    <text x="78" y="38" fontSize="8" fill="#378ADD">✦</text>
                    <text x="4" y="55" fontSize="7" fill="#BA7517">✦</text>
                </svg>

                {/* Brand name */}
                <span>daino</span>

            </Link>

            {/* ── Middle: desktop navigation links ── */}
            <div style={styles.links}>

                <Link
                    to="/"
                    style={isActive('/')
                        ? { ...styles.link, ...styles.linkActive }
                        : styles.link}
                >
                    feed
                </Link>

                <Link
                    to="/map"
                    style={isActive('/map')
                        ? { ...styles.link, ...styles.linkActive }
                        : styles.link}
                >
                    map
                </Link>

                <Link
                    to="/wishlist"
                    style={isActive('/wishlist')
                        ? { ...styles.link, ...styles.linkActive }
                        : styles.link}
                >
                    wishlist
                </Link>

                <Link
                    to="/year-review"
                    style={isActive('/year-review')
                        ? { ...styles.link, ...styles.linkActive }
                        : styles.link}
                >
                    2024 recap
                </Link>

            </div>

            {/* ── Right side: add memory button + profile ── */}
            <div style={styles.right}>

                {/* Button to add a new memory */}
                <Link to="/add" style={styles.addBtn}>
                    + memory
                </Link>

                {/* Profile avatar circle */}
                <Link to="/profile" style={styles.avatar}>
                    K
                </Link>

            </div>

            {/* ── Mobile: hamburger menu button ── */}
            <button
                style={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? '✕' : '☰'}
            </button>

            {/* ── Mobile: dropdown menu (shows when hamburger is clicked) ── */}
            {menuOpen && (
                <div style={styles.mobileMenu}>
                    <Link to="/" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>feed</Link>
                    <Link to="/map" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>map</Link>
                    <Link to="/wishlist" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>wishlist</Link>
                    <Link to="/year-review" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>2024 recap</Link>
                    <Link to="/add" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>+ memory</Link>
                    <Link to="/profile" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>profile</Link>
                </div>
            )}

        </nav>
    )
}

// ── All Navbar styles using Daino brand colours ──
const styles = {

    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        height: '64px',
        backgroundColor: '#FAF8F3',   // Daino cream
        borderBottom: '1px solid #E8E4DC',
        position: 'sticky',    // stays at top when scrolling
        top: 0,
        zIndex: 100,
        flexWrap: 'wrap',
    },


    // daino logo — dino icon + text side by side
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: 'Lora, Georgia, serif',
        fontSize: '18px',
        fontWeight: '500',
        color: '#2C2A27',
        textDecoration: 'none',
        letterSpacing: '0.5px',
    },

    // desktop links row
    links: {
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
    },

    // single nav link
    link: {
        fontSize: '14px',
        color: '#888780',    // muted when not active
        textDecoration: 'none',
        fontWeight: '400',
    },

    // active nav link — darker and underlined
    linkActive: {
        color: '#2C2A27',
        borderBottom: '2px solid #D85A30',  // Daino food/coral colour
        paddingBottom: '2px',
    },

    // right side wrapper
    right: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
    },

    // "+ memory" button
    addBtn: {
        backgroundColor: '#D85A30',   // Daino coral
        color: '#FAF8F3',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: '500',
        textDecoration: 'none',
    },

    // profile circle with first letter of name
    avatar: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: '#D4537E',   // Daino love/pink
        color: '#FAF8F3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: '500',
        textDecoration: 'none',
    },

    // hamburger button — only visible on mobile
    hamburger: {
        display: 'none',           // hidden on desktop
        background: 'none',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        color: '#2C2A27',
    },

    // mobile dropdown menu
    mobileMenu: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FAF8F3',
        borderTop: '1px solid #E8E4DC',
        padding: '8px 0',
    },

    // single link inside mobile menu
    mobileLink: {
        padding: '12px 32px',
        fontSize: '15px',
        color: '#2C2A27',
        textDecoration: 'none',
        borderBottom: '1px solid #E8E4DC',
    },
}

export default Navbar