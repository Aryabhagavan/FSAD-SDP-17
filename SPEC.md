# FSAD-PS17: Farming Awareness & Support Platform

## Project Overview
- **Project Name**: FarmConnect - Farming Awareness & Support Platform
- **Project Type**: Single Page Web Application (HTML/CSS/JS)
- **Core Functionality**: A multi-role platform to raise awareness about farming importance, provide resources to farmers, and connect different stakeholders in the agricultural ecosystem
- **Target Users**: Admins, Farmers, Agricultural Experts, and General Public

---

## UI/UX Specification

### Layout Structure

#### Global Layout
- **Header**: Fixed navigation bar with logo, nav links, user menu
- **Main Content**: Dynamic content area based on current view
- **Footer**: Contact info, quick links, social media

#### Responsive Breakpoints
- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (two columns)
- Desktop: > 1024px (full layout with sidebar)

### Visual Design

#### Color Palette
- **Primary**: #1B4D3E (Deep Forest Green - represents growth/nature)
- **Secondary**: #F4E04D (Golden Yellow - represents harvest/wheat)
- **Accent**: #E67E22 (Burnt Orange - represents energy/action)
- **Background**: #FAF9F6 (Off-white/Cream)
- **Surface**: #FFFFFF (White for cards)
- **Text Primary**: #2C3E50 (Dark slate)
- **Text Secondary**: #7F8C8D (Gray)
- **Success**: #27AE60
- **Warning**: #F39C12
- **Error**: #E74C3C

#### Typography
- **Headings**: 'Playfair Display', serif (weight: 700)
- **Body**: 'Source Sans Pro', sans-serif (weight: 400, 600)
- **Font Sizes**:
  - H1: 2.5rem
  - H2: 2rem
  - H3: 1.5rem
  - Body: 1rem
  - Small: 0.875rem

#### Spacing System
- Base unit: 8px
- Margins: 8px, 16px, 24px, 32px, 48px
- Paddings: 8px, 16px, 24px, 32px
- Border radius: 8px (cards), 4px (buttons), 50% (avatars)

#### Visual Effects
- Card shadows: 0 4px 6px rgba(0,0,0,0.1), 0 8px 25px rgba(0,0,0,0.08)
- Hover transitions: 0.3s ease-in-out
- Button hover: scale(1.02) with shadow increase
- Page load animations: fade-in with slide-up (staggered)

### Components

#### Navigation Bar
- Logo (left): FarmConnect with wheat icon
- Nav links (center): Home, Resources, Experts, Forum, About
- User area (right): Login/Register or User dropdown
- Mobile: Hamburger menu with slide-out drawer

#### Hero Section (Home)
- Full-width background with layered gradient overlay
- Animated wheat/crop illustration
- Main headline and subtext
- Call-to-action buttons (Get Started, Learn More)

#### Dashboard Cards
- Icon + Title + Description + Action button
- Hover: lift effect with shadow
- Available for: Resources, Experts, Initiatives, Forum

#### User Role Cards
- Profile avatar with role badge
- Name, role, specialization
- Quick action buttons

#### Forum Components
- Thread list with upvote counts
- Comment threads with nested replies
- Create post form with rich text

#### Forms
- Floating labels
- Validation states (success/error)
- Loading states with spinners

---

## Functionality Specification

### User Roles & Authentication

#### Role Definitions
1. **Admin**
   - Full platform access
   - Content moderation
   - User management
   - Analytics dashboard
   - Approve experts

2. **Farmer**
   - Access resources
   - Connect with experts
   - Join initiatives
   - Participate in forum
   - Update profile with farm details

3. **Agricultural Expert**
   - Create educational content
   - Provide guidance/consultation
   - Answer farmer questions
   - Participate in forum

4. **Public**
   - View public content
   - Read-only forum access
   - Subscribe to newsletter
   - Learn about farming

#### Authentication Flow
- Registration with role selection
- Login with email/password
- Password reset functionality
- Session management (localStorage)

### Core Features

#### 1. Home Page
- Hero section with platform introduction
- Feature highlights (4 cards)
- Latest resources preview
- Success stories/Testimonials
- Statistics counter (farmers helped, experts, resources)

#### 2. Resources Section
- Categories: Crop Guide, Livestock, Technology, Market Info, Government Schemes
- Searchable/filterable resource library
- Downloadable PDFs, videos, articles
- Bookmark functionality for logged-in users

#### 3. Experts Section
- Expert directory with filters (specialization, rating)
- Expert profile pages
- Consultation request system
- Q&A section

#### 4. Forum
- Topic categories
- Create/view threads
- Upvote system
- Comment and reply
- Search functionality

#### 5. Initiatives
- Active farming initiatives
- Registration for initiatives
- Progress tracking
- Success stories

#### 6. User Dashboards

**Admin Dashboard**
- User statistics
- Content moderation queue
- Platform analytics
- Expert approval management

**Farmer Dashboard**
- My resources (bookmarked)
- My initiatives
- Expert consultations
- Profile management

**Expert Dashboard**
- My content
- Pending consultations
- Questions to answer
- Analytics

### Data Handling
- All data stored in localStorage
- Pre-seeded with sample data
- Data export capability for admin
- Form validation on all inputs

### Edge Cases
- Empty states for all lists
- Loading states during operations
- Error handling with user-friendly messages
- Session expiration handling

---

## Page/View Structure

### Public Views
1. Landing Page (index.html)
2. Resources Library
3. Expert Directory
4. Forum (read-only)
5. Initiatives List
6. Login/Register

### Protected Views (by role)
7. Admin Dashboard
8. Farmer Dashboard
9. Expert Dashboard
10. Profile Settings

---

## Acceptance Criteria

### Visual Checkpoints
- [ ] Hero section displays with animated elements
- [ ] Navigation is responsive on all breakpoints
- [ ] All cards have hover effects
- [ ] Forms show proper validation states
- [ ] Dashboard displays role-specific content
- [ ] Forum threads are properly formatted

### Functional Checkpoints
- [ ] User can register with role selection
- [ ] User can login and sees appropriate dashboard
- [ ] Resources can be browsed and filtered
- [ ] Experts can be searched and viewed
- [ ] Forum posts can be created and upvoted (for appropriate roles)
- [ ] Admin can manage content and users
- [ ] Data persists across page refreshes (localStorage)
- [ ] All animations are smooth (60fps)

### Success Conditions
1. Platform loads without errors
2. All 4 user roles can access their respective dashboards
3. Core features (resources, experts, forum) are functional
4. Responsive design works on mobile/tablet/desktop
5. Visual design matches the specified color palette and typography
