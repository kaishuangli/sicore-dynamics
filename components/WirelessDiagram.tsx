function WirelessDiagram() {
  return (
    <svg
      viewBox="0 0 480 320"
      fill="none"
      className="h-full w-full"
      aria-label="Wireless power transfer diagram showing transmitter coil, receiver coil, and magnetic energy path"
    >
      <rect x="0" y="0" width="480" height="320" rx="16" fill="#F8FAFC" />
      <ellipse cx="140" cy="160" rx="70" ry="70" stroke="#0B5FFF" strokeWidth="2" strokeOpacity="0.35" />
      <ellipse cx="140" cy="160" rx="48" ry="48" stroke="#0B5FFF" strokeWidth="2.5" />
      <text x="140" y="164" textAnchor="middle" fill="#0B5FFF" fontSize="11" fontWeight="700">
        TX Coil
      </text>
      <ellipse cx="340" cy="160" rx="70" ry="70" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.35" />
      <ellipse cx="340" cy="160" rx="48" ry="48" stroke="#38BDF8" strokeWidth="2.5" />
      <text x="340" y="164" textAnchor="middle" fill="#0284C7" fontSize="11" fontWeight="700">
        RX Coil
      </text>
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M188 ${120 + i * 20} Q240 ${100 + i * 24} 292 ${120 + i * 20}`}
          stroke="#0B5FFF"
          strokeWidth="1.5"
          strokeOpacity={0.25 + i * 0.12}
          strokeDasharray="4 6"
        />
      ))}
      <circle cx="240" cy="160" r="4" fill="#0B5FFF" />
      <text x="240" y="200" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="600">
        Magnetic Energy Path
      </text>
    </svg>
  );
}

export default WirelessDiagram;
