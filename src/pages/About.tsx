import Header from '@/components/Header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import Icon from '@/components/ui/icon'

const About = () => {
  const management = [
    {
      name: 'Иванов Иван Иванович',
      position: 'Председатель правления',
      phone: '+7 (495) 123-45-67',
      email: 'chairman@gsk-south2.ru',
      experience: '8 лет',
      garage: 'Гараж №1'
    },
    {
      name: 'Петрова Анна Сергеевна',
      position: 'Заместитель председателя',
      phone: '+7 (495) 123-45-68',
      email: 'deputy@gsk-south2.ru',
      experience: '5 лет',
      garage: 'Гараж №15'
    },
    {
      name: 'Сидоров Петр Александрович',
      position: 'Главный бухгалтер',
      phone: '+7 (495) 123-45-69',
      email: 'accountant@gsk-south2.ru',
      experience: '12 лет',
      garage: 'Гараж №23'
    },
    {
      name: 'Козлова Мария Викторовна',
      position: 'Секретарь',
      phone: '+7 (495) 123-45-70',
      email: 'secretary@gsk-south2.ru',
      experience: '3 года',
      garage: 'Гараж №45'
    }
  ]

  const timeline = [
    {
      year: '1985',
      title: 'Основание кооператива',
      description: 'Создание ПГСК "Южный-2" и строительство первых 50 гаражей'
    },
    {
      year: '1990',
      title: 'Расширение территории',
      description: 'Достройка второй очереди, общее количество гаражей увеличено до 100'
    },
    {
      year: '2000',
      title: 'Модернизация инфраструктуры',
      description: 'Установка современного освещения и системы водоснабжения'
    },
    {
      year: '2010',
      title: 'Завершение строительства',
      description: 'Строительство третьей очереди, достижение планки в 150 гаражей'
    },
    {
      year: '2020',
      title: 'Цифровизация',
      description: 'Внедрение системы видеонаблюдения и электронного документооборота'
    },
    {
      year: '2024',
      title: 'Современное управление',
      description: 'Запуск веб-сайта и онлайн-системы учета взносов'
    }
  ]

  const stats = [
    { label: 'Лет работы', value: '39', icon: 'Calendar' },
    { label: 'Гаражей', value: '150', icon: 'Car' },
    { label: 'Членов кооператива', value: '148', icon: 'Users' },
    { label: 'Площадь территории', value: '2.5 га', icon: 'MapPin' }
  ]

  const services = [
    {
      title: 'Охрана территории',
      description: 'Круглосуточная охрана с видеонаблюдением',
      icon: 'Shield',
      status: 'Активно'
    },
    {
      title: 'Электроснабжение',
      description: '220В в каждом гараже, резервное питание',
      icon: 'Zap',
      status: 'Активно'
    },
    {
      title: 'Водоснабжение',
      description: 'Централизованная подача воды',
      icon: 'Droplets',
      status: 'Активно'
    },
    {
      title: 'Уборка территории',
      description: 'Регулярная уборка и содержание территории',
      icon: 'Broom',
      status: 'Активно'
    },
    {
      title: 'Ремонт и обслуживание',
      description: 'Текущий ремонт общего имущества',
      icon: 'Wrench',
      status: 'По графику'
    },
    {
      title: 'Административные услуги',
      description: 'Ведение документооборота и отчетности',
      icon: 'FileText',
      status: 'Активно'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            О кооперативе
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ПГСК "Южный-2" — это современный гаражный кооператив с богатой историей,
            объединяющий 150 владельцев гаражей в Москве
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <Icon name={stat.icon} size={32} className="mx-auto text-primary mb-4" />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <div className="text-center max-w-4xl mx-auto">
              <Icon name="Target" size={48} className="mx-auto text-primary mb-6" />
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Обеспечить безопасное, комфортное и доступное место для хранения автомобилей,
                создавая сообщество ответственных автовладельцев и поддерживая высокие
                стандарты обслуживания территории и инфраструктуры.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4">
                  <Icon name="Shield" size={32} className="mx-auto text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Безопасность</h3>
                  <p className="text-sm text-muted-foreground">
                    Круглосуточная охрана и современные системы безопасности
                  </p>
                </div>
                <div className="p-4">
                  <Icon name="Users" size={32} className="mx-auto text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Сообщество</h3>
                  <p className="text-sm text-muted-foreground">
                    Дружное сообщество единомышленников с общими интересами
                  </p>
                </div>
                <div className="p-4">
                  <Icon name="Settings" size={32} className="mx-auto text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Качество</h3>
                  <p className="text-sm text-muted-foreground">
                    Высокие стандарты обслуживания и содержания территории
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">История развития</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full"></div>
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <Card className={`w-full max-w-md ${
                    index % 2 === 0 ? 'mr-8 lg:mr-16' : 'ml-8 lg:ml-16'
                  }`}>
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{event.year}</Badge>
                      </div>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name={service.icon} size={32} className="text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                      <Badge 
                        variant={service.status === 'Активно' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {service.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Management */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Правление кооператива</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {management.map((member, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.position}</p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Icon name="Phone" size={16} className="mr-2" />
                          <span>{member.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Icon name="Mail" size={16} className="mr-2" />
                          <span>{member.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Icon name="Clock" size={16} className="mr-2" />
                          <span>Опыт: {member.experience}</span>
                        </div>
                        <div className="flex items-center">
                          <Icon name="MapPin" size={16} className="mr-2" />
                          <span>{member.garage}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Financial Transparency */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Финансовая прозрачность</CardTitle>
            <CardDescription className="text-center">
              Открытая отчетность по использованию средств кооператива
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">375,000 ₽</div>
                <div className="text-sm text-muted-foreground">Собрано взносов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">320,000 ₽</div>
                <div className="text-sm text-muted-foreground">Потрачено на содержание</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">55,000 ₽</div>
                <div className="text-sm text-muted-foreground">Резерв фонда</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Собираемость</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Охрана и безопасность</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Электроснабжение</span>
                  <span>25%</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Ремонт и обслуживание</span>
                  <span>20%</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Административные расходы</span>
                  <span>10%</span>
                </div>
                <Progress value={10} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Контактная информация</CardTitle>
            <CardDescription className="text-center">
              Как с нами связаться
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Icon name="MapPin" size={32} className="mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">
                  г. Москва, ул. Гаражная, 15<br />
                  ГСК "Южный-2"
                </p>
              </div>
              
              <div className="text-center">
                <Icon name="Clock" size={32} className="mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Часы работы</h3>
                <p className="text-muted-foreground">
                  Пн-Пт: 17:00 - 19:00<br />
                  Сб: 10:00 - 12:00<br />
                  Вс: выходной
                </p>
              </div>
              
              <div className="text-center">
                <Icon name="Phone" size={32} className="mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Телефоны</h3>
                <p className="text-muted-foreground">
                  Правление: +7 (495) 123-45-67<br />
                  Охрана: +7 (495) 123-45-68<br />
                  Аварийная служба: +7 (495) 123-45-69
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg">
                <Icon name="Mail" size={16} className="mr-2" />
                info@gsk-south2.ru
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default About