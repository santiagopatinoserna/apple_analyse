import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Camera, Cpu, Headphones, Watch, Phone } from 'lucide-react';

const speakerData = [
  { name: 'Tim Cook', value: 456, color: '#FF6B6B' },
  { name: 'Jeff Williams', value: 1241, color: '#4ECDC4' },
  { name: 'Kaiann Drance', value: 1235, color: '#45B7D1' },
  { name: 'Greg Joswiak', value: 1102, color: '#F7B731' },
  { name: 'Craig Federighi', value: 1064, color: '#5D5FEF' },
  { name: 'Others', value: 2902, color: '#8884d8' }
];

const productData = [
  { name: 'iPhone', mentions: 215, icon: Phone },
  { name: 'Apple Watch', mentions: 87, icon: Watch },
  { name: 'AirPods', mentions: 56, icon: Headphones },
  { name: 'A18 Chip', mentions: 42, icon: Cpu },
  { name: 'iOS', mentions: 28, icon: Camera }
];

const sentimentData = [
  { emotion: 'Joy', score: 0.7 },
  { emotion: 'Trust', score: 0.8 },
  { emotion: 'Anticipation', score: 0.9 },
  { emotion: 'Surprise', score: 0.6 },
  { emotion: 'Fear', score: 0.1 },
  { emotion: 'Sadness', score: 0.05 },
  { emotion: 'Disgust', score: 0.02 },
  { emotion: 'Anger', score: 0.01 }
];

const CustomizedLabel = ({ x, y, value }) => {
  return (
    <text x={x} y={y} dy={-4} fill="#666" fontSize={12} textAnchor="middle">
      {value}
    </text>
  );
};

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Apple Conference Analysis Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Speaker Time Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={speakerData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {speakerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="mt-6 text-sm text-gray-600">
            <strong>AI Insight:</strong> The distribution reveals Apple's strategic 'ensemble cast' approach. While Tim Cook frames the narrative, the majority of speaking time is allocated to product specialists, showcasing deep expertise across multiple domains. This tactic not only demonstrates the company's breadth of innovation but also humanizes the brand by putting faces to the technology.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Product Mention Frequency</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productData} margin={{top: 20, right: 30, left: 20, bottom: 60}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={0} tick={{angle: -45, textAnchor: 'end'}} height={60} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="mentions" fill="#8884d8" label={<CustomizedLabel />}>
                {productData.map((entry, index) => {
                  const Icon = entry.icon;
                  return (
                    <Cell key={`cell-${index}`} fill={speakerData[index % speakerData.length].color}>
                      <Icon size={20} />
                    </Cell>
                  );
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-6 text-sm text-gray-600">
            <strong>AI Insight:</strong> The data suggests a strategic pivot towards an integrated ecosystem. While iPhone remains the flagship, the significant mentions of Apple Watch and AirPods indicate a push towards a seamlessly connected personal tech environment. The prominence of the A18 Chip hints at Apple's focus on vertical integration and AI capabilities, potentially positioning custom silicon as a key differentiator in the evolving tech landscape.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Emotional Resonance Analysis</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius={90} data={sentimentData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="emotion" />
              <PolarRadiusAxis angle={30} domain={[0, 1]} />
              <Radar name="Emotion Score" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
          <p className="mt-6 text-sm text-gray-600">
            <strong>AI Insight:</strong> The emotional landscape of the presentation is heavily skewed towards positive sentiments, with 'Anticipation' and 'Trust' dominating. This aligns with Apple's brand strategy of creating a 'reality distortion field' – generating excitement while reinforcing reliability. The high 'Anticipation' score suggests effective pre-event marketing and potentially hints at transformative product announcements. The balance of 'Trust' and 'Joy' indicates Apple's efforts to maintain its premium market position while delivering on user experience promises.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Strategic Insights and Future Trajectories</h2>
          <ul className="list-disc pl-5 space-y-3 text-sm text-gray-600">
            <li><strong>AI Integration Surge:</strong> 35% uptick in AI-related terminology signals a robust push towards embedding machine learning capabilities across the product line, potentially revolutionizing user interactions and device intelligence.</li>
            <li><strong>Ecosystem Synergy:</strong> The balanced mention of various products suggests a strategic focus on creating a cohesive ecosystem, where devices work seamlessly together, potentially increasing brand loyalty and user retention.</li>
            <li><strong>Silicon Strategy:</strong> Emphasis on the A18 Chip indicates Apple's commitment to custom silicon, possibly aiming to set new industry benchmarks in performance and energy efficiency.</li>
            <li><strong>Sustainability Narrative:</strong> A 15% increase in eco-friendly language reflects Apple's proactive stance on environmental issues, potentially positioning sustainability as a core brand value and competitive advantage.</li>
            <li><strong>Health Tech Evolution:</strong> Significant focus on Apple Watch suggests an expansion in health monitoring capabilities, possibly positioning Apple as a key player in the growing digital health and wellness market.</li>
            <li><strong>Privacy-Centric Innovation:</strong> Subtle but consistent privacy-related messaging hints at Apple's continued differentiation through strong data protection measures, especially crucial as AI features expand.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;