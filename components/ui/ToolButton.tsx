import styles from "./ToolButton.module.css";

interface ToolButtonProps {
  tools: string[];
}

const ToolButton = ({tools}: ToolButtonProps) => {
  // Create a button for each tool in tools array
  return (
    <>
      {tools.map((tool) => (
        <div key={tool} className={styles.tool}>{tool}</div>
      ))}
    </>
  )
}

export default ToolButton;