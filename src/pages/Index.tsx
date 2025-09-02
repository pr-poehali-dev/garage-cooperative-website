import Header from '@/components/Header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { Link } from 'react-router-dom'
import { Progress } from '@/components/ui/progress'

const Index = () => {
  const stats = [
    {
      title: 'Всего гаражей',
      value: '150',
      icon: 'Car',
      color: 'text-primary'
    },
    {
      title: 'Оплачено',
      value: '127',
      icon: 'CheckCircle',
      color: 'text-green-600'
    },
    {
      title: 'Задолженность',
      value: '23',
      icon: 'AlertTriangle',
      color: 'text-red-600'
    },
    {
      title: 'Собираемость',
      value: '85%',
      icon: 'TrendingUp',
      color: 'text-blue-600'
    }
  ]

  const recentNews = [
    {
      id: 1,
      title: 'Собрание членов кооператива',
      date: '1 сентября 2024',
      excerpt: 'Приглашаем всех владельцев гаражей на общее собрание по вопросу ремонта крыши.',
      urgent: true
    },
    {
      id: 2,
      title: 'Завершены работы по благоустройству',
      date: '25 августа 2024',
      excerpt: 'Закончены работы по асфальтированию въездной дороги и установке освещения.',
      urgent: false
    }
  ]

  const quickLinks = [
    { title: 'Новости', desc: 'Последние события', icon: 'Newspaper', href: '/news' },
    { title: 'Документы', desc: 'Устав и протоколы', icon: 'FileText', href: '/documents' },
    { title: 'Полезное', desc: 'Советы и рекомендации', icon: 'Info', href: '/useful' },
    { title: 'Объявления', desc: 'Купля-продажа', icon: 'Megaphone', href: '/announcements' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Добро пожаловать в ГСК "Южный-2"
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Современная система управления гаражным кооперативом с удобным 
              учетом взносов, новостями и документооборотом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/news">
                  <Icon name="Newspaper" className="mr-2" size={20} />
                  Последние новости
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  <Icon name="Info" className="mr-2" size={20} />
                  О кооперативе
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Статистика кооператива</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Icon name={stat.icon} size={32} className={`mx-auto mb-4 ${stat.color}`} />
                  <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Собираемость взносов</h3>
              <span className="text-2xl font-bold text-primary">85%</span>
            </div>
            <Progress value={85} className="h-3" />
            <p className="text-sm text-muted-foreground mt-2">
              127 из 150 гаражей оплатили взносы за текущий период
            </p>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Последние новости</h2>
            <Button variant="outline" asChild>
              <Link to="/news">
                Все новости
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentNews.map((news) => (
              <Card key={news.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{news.title}</CardTitle>
                    {news.urgent && <Badge variant="destructive">Срочно</Badge>}
                  </div>
                  <CardDescription>{news.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                  <Button variant="ghost" size="sm">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Быстрый доступ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-md transition-all hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Icon name={link.icon} size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
                  <p className="text-muted-foreground mb-4">{link.desc}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={link.href}>Перейти</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Свяжитесь с нами</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Icon name="Phone" size={32} className="text-primary mb-4" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon name="Mail" size={32} className="text-primary mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@gsk-south2.ru</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon name="MapPin" size={32} className="text-primary mb-4" />
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Гаражная, 15</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Car" size={24} />
            <span className="text-xl font-bold">ГСК "Южный-2"</span>
          </div>
          <p className="text-primary-foreground/80">
            © 2024 Гаражный кооператив "Южный-2". Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Index