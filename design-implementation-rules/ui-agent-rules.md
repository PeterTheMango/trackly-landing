# AI Agent UI Development Rules

> **Note**: AI generated documentation is stored in the `ai-docs` folder, while design systems and rules are located in the `rules-implementation` folder.

## Core Requirements

### 1. Mandatory Tool Usage
- **ALWAYS** use the `shadcn-ui` MCP tool when designing or implementing any UI interface components
- Never create custom UI components from scratch when shadcn/ui equivalents exist
- Prioritize shadcn/ui components for consistency, accessibility, and maintainability

### 2. Design System Adherence
- **ALWAYS** reference `rules-implementation/design.json` before starting any UI work
- Ensure all generated components follow the design system specifications defined in the JSON file
- Maintain consistency across all visual elements, spacing, colors, and typography

## Implementation Guidelines

### Component Selection Priority
1. **First**: Check if required component exists in shadcn/ui library
2. **Second**: Use shadcn/ui MCP tool to install and configure the component
3. **Third**: Customize the component according to `design.json` specifications
4. **Last Resort**: Only create custom components if no shadcn/ui alternative exists

### Design System Integration
- Extract color palette from `rules-implementation/design.json` and apply to shadcn/ui theme configuration
- Use typography hierarchy defined in the design system
- Apply spacing values consistently using the specified scale
- Implement component variants that match the design system patterns

### Workflow Process
1. **Analyze Requirements**: Understand the UI component needs
2. **Check Design System**: Review `rules-implementation/design.json` for relevant specifications
3. **Install Components**: Use shadcn-ui MCP tool to add required components
4. **Apply Design Tokens**: Customize components with design system values
5. **Verify Consistency**: Ensure output matches design system principles

## Mandatory Checks

Before delivering any UI component, verify:
- [ ] shadcn/ui MCP tool was used for component installation
- [ ] Design system colors are properly applied from `rules-implementation/design.json`
- [ ] Typography follows the hierarchy defined in `rules-implementation/design.json`
- [ ] Spacing uses the specified scale system
- [ ] Component structure matches defined patterns
- [ ] Accessibility standards are maintained
- [ ] Responsive behavior follows breakpoint specifications

## Error Prevention

### Common Mistakes to Avoid
- Creating custom buttons when shadcn/ui Button component exists
- Ignoring the color palette defined in `rules-implementation/design.json`
- Using arbitrary spacing values instead of the design system scale
- Implementing components without checking shadcn/ui availability first
- Deviating from typography hierarchy without justification

### Quality Assurance
- Always preview components to ensure they match design system aesthetics
- Test responsive behavior across defined breakpoints
- Validate that accessibility features are properly implemented
- Confirm that component variants align with design patterns

## Exception Handling

### When Custom Components Are Acceptable
- Required functionality doesn't exist in shadcn/ui library
- Highly specialized business logic components
- Complex data visualization elements
- Custom animations or interactions not supported by shadcn/ui

### Documentation Requirements
When creating custom components, document:
- Why shadcn/ui alternative wasn't suitable
- How the component follows design system principles
- Accessibility considerations implemented
- Maintenance and update procedures

## Success Criteria

A successful UI implementation should:
- Seamlessly integrate with existing shadcn/ui components
- Perfectly match the visual style defined in `rules-implementation/design.json`
- Maintain consistent user experience across all interfaces
- Be easily maintainable and extensible
- Follow accessibility best practices
- Perform well across all specified breakpoints

## Review Process

Before considering any UI work complete:
1. **Visual Review**: Compare against design system specifications in `rules-implementation/design.json`
2. **Functional Review**: Test all interactive elements
3. **Accessibility Review**: Ensure WCAG compliance
4. **Performance Review**: Verify optimal loading and rendering
5. **Consistency Review**: Check alignment with existing components

## Continuous Improvement

- Regularly update `rules-implementation/design.json` with new patterns and learnings
- Document any shadcn/ui component customizations in `ai-docs` for team knowledge
- Document any shadcn/ui component customizations for team knowledge
- Maintain a component library showcasing design system implementation
- Gather feedback on component usability and iterate accordingly

---

**Remember**: The goal is to create consistent, accessible, and maintainable UI components that perfectly reflect the design system while leveraging the power and reliability of shadcn/ui.