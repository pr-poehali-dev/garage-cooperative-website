import Header from '@/components/Header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Собрание членов кооператива',
      date: '1 сентября 2024',
      author: 'Правление ГСК',
      content: 'Уважаемые владельцы гаражей! 1 сентября 2024 года в 18:00 в помещении правления состоится общее собрание членов кооператива. На повестке дня: обсуждение ремонта кровли, утверждение сметы расходов, выборы ревизионной комиссии.',
      urgent: true,
      category: 'Собрания'
    },
    {
      id: 2,
      title: 'Завершены работы по благоустройству территории',
      date: '25 августа 2024',
      author: 'Правление ГСК',
      content: 'Завершены запланированные работы по асфальтированию въездной дороги и установке дополнительного освещения на территории кооператива. Общая стоимость работ составила 450 000 рублей.',
      urgent: false,
      category: 'Благоустройство'
    },
    {
      id: 3,
      title: 'Изменения в графике работы правления',
      date: '20 августа 2024',
      author: 'Правление ГСК',
      content: 'С 1 сентября изменяется график работы правления кооператива. Новый график: понедельник, среда, пятница с 17:00 до 19:00. В остальные дни правление работает по предварительной записи.',
      urgent: false,
      category: 'Режим работы'
    },
    {
      id: 4,
      title: 'Установка системы видеонаблюдения',
      date: '15 августа 2024',
      author: 'Служба безопасности',
      content: 'На территории кооператива установлены дополнительные камеры видеонаблюдения. Теперь под контролем находятся все въезды и основные проходы. Система работает в круглосуточном режиме.',
      urgent: false,
      category: 'Безопасность'
    },
    {
      id: 5,
      title: 'Плановые работы по электроснабжению',
      date: '10 августа 2024',
      author: 'Электрослужба',
      content: '12 августа с 9:00 до 15:00 будут проводиться плановые работы по модернизации электросети. В это время возможны кратковременные отключения электроэнергии. Приносим извинения за доставленные неудобства.',
      urgent: true,
      category: 'Электроснабжение'
    },
    {
      id: 6,
      title: 'Напоминание о взносах',
      date: '5 августа 2024',
      author: 'Бухгалтерия',
      content: 'Напоминаем членам кооператива о необходимости своевременного внесения членских взносов. Задолженность по взносам может повлечь за собой ограничение доступа к гаражу.',
      urgent: false,
      category: 'Финансы'
    }
  ]

  const categories = ['Все', 'Собрания', 'Благоустройство', 'Режим работы', 'Безопасность', 'Электроснабжение', 'Финансы']

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Новости кооператива</h1>
          <p className="text-xl text-muted-foreground">
            Актуальная информация о событиях и изменениях в ГСК "Южный-2"
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Категории</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'Все' ? 'default' : 'outline'}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  {item.urgent && <Badge variant="destructive">Срочно</Badge>}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Icon name="Calendar" size={16} className="mr-1" />
                    {item.date}
                  </span>
                  <span className="flex items-center">
                    <Icon name="User" size={16} className="mr-1" />
                    {item.author}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {item.content}
                </p>
                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="sm">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Читать полностью
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Share2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Icon name="RotateCcw" size={16} className="mr-2" />
            Загрузить ещё новости
          </Button>
        </div>

        {/* Subscription Section */}
        <Card className="mt-12">
          <CardContent className="p-8 text-center">
            <Icon name="Bell" size={48} className="mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Будьте в курсе событий</h3>
            <p className="text-muted-foreground mb-6">
              Подпишитесь на уведомления, чтобы не пропустить важные новости кооператива
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg">
                <Icon name="Mail" size={16} className="mr-2" />
                Подписаться на email
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Telegram-канал
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default News