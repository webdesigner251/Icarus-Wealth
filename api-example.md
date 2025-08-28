# Social Media Links API

## Admin API Endpoint

### GET /api/social-media
Returns current social media links

**Response:**
```json
{
  "facebook": "https://facebook.com/icaruswealth",
  "instagram": "https://instagram.com/icaruswealth", 
  "twitter": "https://twitter.com/icaruswealth",
  "tiktok": "https://tiktok.com/@icaruswealth",
  "linkedin": "https://linkedin.com/company/icaruswealth"
}
```

### PUT /api/social-media
Updates social media links (Admin only)

**Request Body:**
```json
{
  "facebook": "https://facebook.com/icaruswealth",
  "instagram": "https://instagram.com/icaruswealth",
  "twitter": "https://twitter.com/icaruswealth", 
  "tiktok": "https://tiktok.com/@icaruswealth",
  "linkedin": "https://linkedin.com/company/icaruswealth"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Social media links updated successfully"
}
```

## Implementation Notes

1. The JavaScript file `js/social-links.js` automatically loads social media links on page load
2. When admin updates links via API, all website pages will show updated links
3. If API is unavailable, default "#" links are maintained
4. All social media links open in new tab (_blank target)

## Database Schema Example

```sql
CREATE TABLE social_links (
  id INT PRIMARY KEY AUTO_INCREMENT,
  platform VARCHAR(50) NOT NULL,
  url VARCHAR(255) NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```