// ...existing code...
import React, { useState, useRef, useEffect } from 'react';
import './BitrixShowcase.css';
import {
  FaUsers,
  FaCheckCircle,
  FaBullhorn,
  FaBook,
  FaHandshake,
  FaVideo,
  FaUserTie,
  FaFolderOpen,
  FaCogs,
} from 'react-icons/fa';


const bitrixOptions = [
  { icon: <FaHandshake />, label: 'CRM & Sales', image: `${import.meta.env.BASE_URL}assets/crm.png` },
  { icon: <FaUsers />, label: 'Workgroups', image: `${import.meta.env.BASE_URL}assets/workgroup.jpg` },
  { icon: <FaCheckCircle />, label: 'Task Management', image: `${import.meta.env.BASE_URL}assets/tasks_and_projects-main.png` },
  { icon: <FaBullhorn />, label: 'Marketing', image: `${import.meta.env.BASE_URL}assets/marketing.jpg` },
  { icon: <FaBook />, label: 'Knowledge Base', image: `${import.meta.env.BASE_URL}assets/knowledge_base.jpg` },
  { icon: <FaVideo />, label: 'Online Meetings', image: `${import.meta.env.BASE_URL}assets/online meeting.jpg` },
  { icon: <FaUserTie />, label: 'HR Tools', image: `${import.meta.env.BASE_URL}assets/HR.jpg` },
  { icon: <FaFolderOpen />, label: 'Document Drive', image: `${import.meta.env.BASE_URL}assets/drive.jpg` },
  { icon: <FaCogs />, label: 'Automation', image: `${import.meta.env.BASE_URL}assets/automation.jpg` },
];

const CLEAR_DELAY = 160;

const BitrixShowcase = ({ onOpenForm }) => {
  const [hovered, setHovered] = useState(null);
  const gridRef = useRef(null);
  const clearRef = useRef(null);
  const rafRef = useRef(null);
  const lastIndexRef = useRef(null);

  // Preload images so switching is instant
  useEffect(() => {
    bitrixOptions.forEach((o) => {
      const img = new Image();
      img.src = o.image;
    });
  }, []);

  const scheduleClear = () => {
    if (clearRef.current) clearTimeout(clearRef.current);
    clearRef.current = setTimeout(() => {
      lastIndexRef.current = null;
      setHovered(null);
      clearRef.current = null;
    }, CLEAR_DELAY);
  };

  const handleGridMouseMove = (e) => {
    // Cancel pending clear
    if (clearRef.current) {
      clearTimeout(clearRef.current);
      clearRef.current = null;
    }

    // Throttle updates with rAF
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const target = e.target;
      // guard: ensure closest exists
      const tileEl = typeof target.closest === 'function' ? target.closest('.tile') : null;
      if (tileEl && gridRef.current && gridRef.current.contains(tileEl)) {
        const idxAttr = tileEl.getAttribute('data-index');
        const idx = idxAttr == null ? NaN : parseInt(idxAttr, 10);
        if (!Number.isNaN(idx) && idx !== lastIndexRef.current) {
          lastIndexRef.current = idx;
          setHovered(idx);
        }
      } else {
        // not over any tile -> schedule clear
        scheduleClear();
      }
    });
  };

  const handlePanelPointerLeave = () => {
    scheduleClear();
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (clearRef.current) clearTimeout(clearRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // pick the image to render (use first as fallback)
  const currentImage = bitrixOptions[hovered ?? 0]?.image ?? '';

  return (
    <>
      {/* ⭐ GOLD ATTRACTIVE HEADER LINE ⭐ */}
      <div
        className="top-text-strip"
        style={{
          textAlign: "center",
          fontSize: "22px",
          fontWeight: "700",
          marginBottom: "20px",
          color: "#1a1a1a",
          padding: "10px 0",
        }}
      >
        Boost Your Business with Unique Design Consultant  Your Trusted{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #b8860b, #ffd700, #daa520)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "900",
            marginLeft: "6px",
            marginRight: "6px",
          }}
        >
          Bitrix24 Gold Partner
        </span>
        🚀 All Tools in One Place
      </div>

      <div className="bitrix-showcase-wrapper" aria-hidden={false}>
        <img
          src={`${import.meta.env.BASE_URL}assets/bitrix24-blur.jpg`}
          alt="Blurred Bitrix24"
          className="background-blur"
        />

        <img
          src={currentImage}
          alt=""
          className="feature-highlight"
          style={{
            opacity: hovered !== null ? 1 : 0,
            pointerEvents: "none",
            transition: "opacity 220ms ease",
          }}
          aria-hidden
        />

        <div className="tile-panel" onPointerLeave={handlePanelPointerLeave}>
          <h6 className="fw-bold mb-3">Manage your business with Bitrix24</h6>

          <div className="tile-grid" ref={gridRef} onMouseMove={handleGridMouseMove}>
            {bitrixOptions.map((item, i) => (
              <div key={i} className="tile" data-index={String(i)}>
                <div className="tile-icon text-primary fs-4">{item.icon}</div>
                <small className="fw-medium">{item.label}</small>
              </div>
            ))}
          </div>

          <button className="start-btn mt-4" onClick={() => onOpenForm?.("BitrixShowcase")}>
            Get Started →
          </button>
        </div>
      </div>
    </>
  );
};

export default BitrixShowcase;