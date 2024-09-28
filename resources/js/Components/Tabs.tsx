import React, { useState, ReactNode } from "react";

// Define the props type for the Tabs component
interface TabsProps {
  children: ReactNode[] | ReactNode;
}

// Define the props type for the Tab component
interface TabProps {
  label: string;
  children: ReactNode;
}

// Tabs component
export function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const childArray = React.Children.toArray(children);

  // Handling the click event to switch tabs
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  // Getting all the tab labels and content from the children
  const tabs = childArray.map((child, index) => {
    if (!React.isValidElement(child)) return null; // Ensure it's a valid React element
    return (
      <button
        key={index}
        className={`py-1 px-3 ${
          activeTab === index ? "border-b-4 border-primary shadow-sm font-medium" : ""
        }`}
        onClick={() => handleTabClick(index)}
      >
        {child.props.label}
      </button>
    );
  });

  // Active tab content
  const activeTabContent = childArray[activeTab];

  return (
    <div className="tabs">
      <div className="flex mb-4 border-b-2">{tabs}</div>
      <div>{activeTabContent}</div>
    </div>
  );
}

// Tab component
export function Tab({ children }: TabProps) {
  return <div>{children}</div>;
}
