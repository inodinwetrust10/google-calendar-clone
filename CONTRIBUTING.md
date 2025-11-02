# Contributing to Google Calendar Clone

Thank you for your interest in contributing to this project! This document provides guidelines for contributing.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (OS, browser, Node version)

### Suggesting Features

Feature requests are welcome! Please:
- Check existing issues first
- Clearly describe the feature and its benefits
- Provide use cases
- Consider implementation complexity

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/google-calendar-clone.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**
   ```bash
   npm run dev
   # Manually test all affected features
   ```

5. **Commit with clear messages**
   ```bash
   git commit -m "feat: add event editing functionality"
   ```

   Use conventional commits:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting)
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

6. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a pull request on GitHub.

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use functional components and hooks
- Keep components small and focused
- Extract reusable logic into custom hooks

### File Organization

- Place components in `components/` directory
- Use subdirectories for related components
- Keep utilities in `lib/` directory
- Database code goes in `db/` directory

### Naming Conventions

- Components: PascalCase (e.g., `EventPopover.tsx`)
- Files: kebab-case for utilities (e.g., `get-time.ts`)
- Functions: camelCase (e.g., `handleSubmit`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_EVENTS`)

### Component Structure

```tsx
// 1. Imports
import { useState } from 'react';
import { Button } from './ui/button';

// 2. Types/Interfaces
interface Props {
  title: string;
}

// 3. Component
export default function MyComponent({ title }: Props) {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. Handlers
  const handleClick = () => {};
  
  // 6. Render
  return <div>{title}</div>;
}
```

### Database Changes

If modifying the database schema:

1. Update `db/schema.ts`
2. Generate migration: `npm run db:generate`
3. Test migration: `npm run db:migrate`
4. Document changes in PR description

### Testing

Currently, the project lacks automated tests. Contributions adding tests are highly appreciated!

Manual testing checklist:
- [ ] Month view displays correctly
- [ ] Week view displays correctly
- [ ] Day view displays correctly
- [ ] Events can be created
- [ ] Events display in correct time slots
- [ ] Navigation between dates works
- [ ] Sidebar toggle works
- [ ] Responsive design works on mobile

## Questions?

Feel free to open an issue for discussion or reach out to the maintainers.

## Code of Conduct

Be respectful and constructive in all interactions. We're all here to learn and build together.
