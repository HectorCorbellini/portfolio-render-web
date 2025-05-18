import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import ProjectCard from '../src/components/Projects/ProjectCard';
import { Project } from '../src/types';

const dummyProject: Project = {
  id: 'test-project',
  title: 'Test Project',
  description: 'A test project description.',
  image: 'https://example.com/image.png',
  tags: ['Tag1', 'Tag2'],
  demoPath: 'test-path',
  detailedDescription: 'Detailed description.'
};

describe('ProjectCard Component', () => {
  it('renders project title and description', () => {
    render(<ProjectCard project={dummyProject} onClick={() => {}} />);
    expect(screen.getByText('Test Project')).toBeDefined();
    expect(screen.getByText('A test project description.')).toBeDefined();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<ProjectCard project={dummyProject} onClick={onClick} />);
    const card = screen.getByText('Test Project').closest('div');
    if (card) {
      fireEvent.click(card);
    }
    expect(onClick).toHaveBeenCalled();
  });
});
