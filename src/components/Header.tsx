import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const Header = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/news', label: 'Новости', icon: 'Newspaper' },
    { path: '/documents', label: 'Документы', icon: 'FileText' },
    { path: '/useful', label: 'Полезное', icon: 'Info' },
    { path: '/announcements', label: 'Объявления', icon: 'Megaphone' },
    { path: '/about', label: 'О нас', icon: 'Users' }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon name="Car" size={32} className="text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">ГСК "Южный-2"</h1>
              <p className="text-sm text-muted-foreground">Гаражный кооператив</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "default" : "ghost"}
                size="sm"
                asChild
              >
                <Link to={item.path} className="flex items-center space-x-2">
                  <Icon name={item.icon} size={16} />
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header