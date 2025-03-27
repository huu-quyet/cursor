---
description: Instructions for generating an analysis plan for a specific screen based on the design and Business Requirement Documentation (BRD).
---

# Screen Analysis and Implementation Guide

## Screen Design

- **Figma Design URL**: [Login Page Design (Community)](<https://www.figma.com/design/NeJp7hyC8uWV7JW0jpLJRj/Login-Page-Design-(Community)?node-id=1-82&t=uSDp0F2jePOv5pv7-4>)

## Tools

- **`figma-mcp`**: Use this tool to retrieve design information and download assets in Figma format.

## Related Documentation

- **Task Rules**: Located in `.cursor/rules/task.mdc`, guidelines for creating a task checklist.
- **Business Requirement Documentation (BRD)**: Located in '`docs/brd/login.md`' Detailed business requirements.
- **Implementation Rules**: Located in `.cursor/rules/implementation.mdc`, defining implementation standards.

## Instructions

### **1. Analyzing and Planning**

1. **Extract Design Data**

   - Analyze the **Figma design URL** and retrieve node data by ID.
   - Save the node data in `figma-data/login-node-data.json`.
   - Create necessary folders and files if they do not exist.

2. **Handle Large Files**

   - If `login-node-data.json` is **too large**, split it into multiple smaller files.
   - Store each section’s data in `figma-data/login/sections/`.
   - Use an index file to link all sections.

3. **Download assets**

   - Store assets in the `src/assets/` folder.

4. **Structure Section Files**

   - Each section file should include:
     - **Relevant nodes** for that section.
     - **KeyFile** for reference.
     - **A short description** of the section.

5. **Generate an Implementation Plan**
   - Carefully analyze the **BRD**, **Figma node data**, and **Planning Instructions**.
   - Ensure a complete understanding of all the requirements.
   - If anything is unclear, ask for clarification before proceeding.
   - Create a structured, step-by-step implementation plan.
   - Save the plan in `docs/tasks/login-plan.md`.
   - Ensure your plan follows the **Task Rules**.

### **2. Implementing Tasks**

1. **Follow the Implementation Plan**

   - Work step by step according to `docs/tasks/login-plan.md`.
   - Follow the **implementation rules** in `.cursor/rules/implementation.mdc`.
   - Proceed to the next task **only after** completing and updating the previous one.

2. **Maintain Project Standards**

   - Follow the **project structure**, instructions, and best practices.
   - **Reuse existing components and logics** without modifying them.

3. **Ensure Code Quality**
   - Write **clean, readable, reusable, and maintainable** code.
   - Optimize for **performance, accessibility, and SEO**.

### **3. Update Progress**

- After completing a task and verifying correctness, update the checklist in `docs/tasks/login-plan.md`.
- Mark completed tasks using Markdown checklist syntax:
  ```markdown
  - [x] Implement login form UI (Completed)
  ```

---

By following these structured steps, the implementation will align with the project's best practices and maintain consistency.
